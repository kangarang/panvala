import * as React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles';
import Button from '../../components/Button';
import { MainContext } from '../../components/MainProvider';
import RouterLink from '../../components/RouterLink';
import { convertEVMSlateStatus, statuses } from '../../utils/status';
import { StatelessPage, IMainContext, ISlate, IBallotDates, IProposal } from '../../interfaces';
import SectionLabel from '../../components/SectionLabel';
import { formatPanvalaUnits, splitAddressHumanReadable } from '../../utils/format';
import Card, { CardAddress } from '../../components/Card';
import Tag from '../../components/Tag';
import Deadline from '../../components/Deadline';
import RouteTitle from '../../components/RouteTitle';

const Incumbent = styled.div`
  color: ${COLORS.primary};
  font-weight: bold;
  font-size: 0.8rem;
  margin-top: 1rem;
`;
const Separator = styled.div`
  border: 1px solid ${COLORS.grey5};
`;

const Container = styled.div`
  display: flex;
  border: 2px solid ${COLORS.grey5};
`;
const MetaColumn = styled.div`
  width: 30%;
  padding: 1.5rem 0;
  border-right: 2px solid ${COLORS.grey5};
`;
const TokensBorder = styled.div`
  margin: 0 1em;
  border: 2px solid ${COLORS.grey5};
`;
const TokensSection = styled.div`
  padding: 0 1.25rem 1rem;
  color: ${COLORS.grey3};
  margin-top: 1em;
`;
const StakingRequirement = styled.div`
  font-size: 1.6rem;
  color: ${COLORS.grey1};
`;
const DarkText = styled.div`
  color: ${COLORS.grey1};
`;

const MainColumn = styled.div`
  width: 70%;
  padding: 1.2rem;
`;
const SlateProposals = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

interface IStakeSidebarProps {
  slate: ISlate;
}
interface IStakeHeaderProps {
  slate: ISlate;
  currentBallot: IBallotDates;
}

export const SlateSidebar = ({ slate }: IStakeSidebarProps): any => {
  const status = convertEVMSlateStatus(slate.status);
  // button: 'Stake Tokens' or 'View Ballot' or null
  const button =
    status === statuses.PENDING_TOKENS ? (
      <RouterLink href={`/slates/stake?slateID=${slate.id}`} as={`/slates/stake/${slate.id}`}>
        <Button large type="default">
          {'Stake Tokens'}
        </Button>
      </RouterLink>
    ) : status === statuses.PENDING_VOTE ? (
      <RouterLink href="/ballots" as="/ballots">
        <Button large type="default">
          {'View Ballot'}
        </Button>
      </RouterLink>
    ) : null;

  const instructions =
    status === statuses.PENDING_TOKENS ? (
      <>
        <SectionLabel>{'STAKING REQUIREMENT'}</SectionLabel>
        <StakingRequirement>{formatPanvalaUnits(slate.requiredStake)}</StakingRequirement>
      </>
    ) : null;

  const isStaked =
    status === statuses.PENDING_VOTE ||
    status === statuses.SLATE_ACCEPTED ||
    status === statuses.SLATE_REJECTED;
  console.log('slate:', slate);

  return (
    <>
      {button}
      <TokensBorder>
        <TokensSection>
          <div>{instructions}</div>
          <div className="f6 lh-copy">
            If you want the Panvala Awards Committee to keep making recommendations and approve of
            the work they have done, you should stake tokens on this slate.
          </div>
        </TokensSection>

        <Separator />

        <TokensSection>
          <SectionLabel lessMargin>{'CREATED BY'}</SectionLabel>
          <DarkText>{slate.owner}</DarkText>
          <CardAddress>{splitAddressHumanReadable(slate.recommenderAddress)}</CardAddress>

          {slate.verifiedRecommender ? (
            <>
              <SectionLabel lessMargin>{'ORGANIZATION'}</SectionLabel>
              <DarkText>{slate.organization}</DarkText>
            </>
          ) : null}
        </TokensSection>

        {isStaked && slate.staker && (
          <>
            <Separator />
            <TokensSection>
              <SectionLabel lessMargin>{'STAKED BY'}</SectionLabel>
              <CardAddress>{splitAddressHumanReadable(slate.staker)}</CardAddress>
            </TokensSection>
          </>
        )}
      </TokensBorder>
    </>
  );
};

export const SlateHeader = ({ slate, currentBallot }: IStakeHeaderProps) => {
  const status = parseInt(convertEVMSlateStatus(slate.status));
  return (
    <>
      <div className="flex">
        <Tag status={''}>{slate.category.toUpperCase()}</Tag>
        <Tag status={convertEVMSlateStatus(status)}>{convertEVMSlateStatus(status)}</Tag>
      </div>
      {slate.deadline && <Deadline ballot={currentBallot} route={'/slates'} />}
    </>
  );
};

interface IProps {
  query: {
    id: string;
  };
}

const Slate: StatelessPage<IProps> = ({ query: { id } }) => {
  const { slates, currentBallot }: IMainContext = React.useContext(MainContext);

  const slateID: number = parseInt(id);

  let slate: ISlate | undefined = (slates as ISlate[]).find(
    (slate: ISlate) => slate.id === slateID
  );

  if (!slate) {
    return <div>Loading...</div>;
  } else {
    slate.requiredStake = '500000000000000000000';
  }
  // return <SlateDetail slate={slate} currentBallot={currentBallot} asPath={asPath} />;
  return (
    <div className="flex flex-column">
      <div className="flex justify-between">
        <SlateHeader slate={slate} currentBallot={currentBallot} />
      </div>
      {slate.incumbent && <Incumbent>INCUMBENT</Incumbent>}
      <RouteTitle>{slate.title}</RouteTitle>

      <Container>
        <MetaColumn>
          <SlateSidebar slate={slate} />
        </MetaColumn>
        <MainColumn>
          <SectionLabel>DESCRIPTION</SectionLabel>
          <DarkText>{slate.description}</DarkText>
          {slate.proposals.length ? (
            <>
              <SectionLabel>{'GRANTS'}</SectionLabel>
              <SlateProposals>
                {slate.proposals.map((proposal: IProposal, index: number) => (
                  <div key={proposal.id}>
                    <RouterLink
                      href={`/proposals/proposal?id=${proposal.id}`}
                      as={`/proposals/${proposal.id}`}
                    >
                      <Card
                        key={proposal.title + index}
                        title={proposal.title}
                        subtitle={proposal.tokensRequested + ' Tokens Requested'}
                        description={proposal.summary}
                        category={'GRANT PROPOSAL'}
                      />
                    </RouterLink>
                  </div>
                ))}
              </SlateProposals>
            </>
          ) : null}
        </MainColumn>
      </Container>
    </div>
  );
};

Slate.getInitialProps = async ({ query }) => {
  return {
    query,
  };
};

export default Slate;

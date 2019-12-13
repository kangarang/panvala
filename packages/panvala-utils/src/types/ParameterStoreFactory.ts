/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from 'ethers';
import { Provider } from 'ethers/providers';
import { UnsignedTransaction } from 'ethers/utils/transaction';
import { Arrayish } from 'ethers/utils';

import { ParameterStore } from './ParameterStore';

export class ParameterStoreFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_names: string[], _values: Arrayish[]): Promise<ParameterStore> {
    return super.deploy(_names, _values) as Promise<ParameterStore>;
  }
  getDeployTransaction(_names: string[], _values: Arrayish[]): UnsignedTransaction {
    return super.getDeployTransaction(_names, _values);
  }
  attach(address: string): ParameterStore {
    return super.attach(address) as ParameterStore;
  }
  connect(signer: Signer): ParameterStoreFactory {
    return super.connect(signer) as ParameterStoreFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ParameterStore {
    return new Contract(address, _abi, signerOrProvider) as ParameterStore;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'proposals',
    outputs: [
      {
        internalType: 'address',
        name: 'gatekeeper',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'requestID',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
      {
        internalType: 'bytes32',
        name: 'value',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'metadataHash',
        type: 'bytes',
      },
      {
        internalType: 'bool',
        name: 'executed',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'initialized',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'params',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string[]',
        name: '_names',
        type: 'string[]',
      },
      {
        internalType: 'bytes32[]',
        name: '_values',
        type: 'bytes32[]',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'proposalID',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'proposer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'requestID',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'value',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'metadataHash',
        type: 'bytes',
      },
    ],
    name: 'ProposalCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'key',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'value',
        type: 'bytes32',
      },
    ],
    name: 'ParameterSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'proposalID',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'value',
        type: 'bytes32',
      },
    ],
    name: 'ProposalAccepted',
    type: 'event',
  },
  {
    constant: false,
    inputs: [],
    name: 'init',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
    ],
    name: 'get',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'value',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
    ],
    name: 'getAsUint',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
    ],
    name: 'getAsAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'bytes32',
        name: '_value',
        type: 'bytes32',
      },
    ],
    name: 'setInitialValue',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
      {
        internalType: 'bytes32',
        name: 'value',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'metadataHash',
        type: 'bytes',
      },
    ],
    name: 'createProposal',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'string[]',
        name: 'keys',
        type: 'string[]',
      },
      {
        internalType: 'bytes32[]',
        name: 'values',
        type: 'bytes32[]',
      },
      {
        internalType: 'bytes[]',
        name: 'metadataHashes',
        type: 'bytes[]',
      },
    ],
    name: 'createManyProposals',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalID',
        type: 'uint256',
      },
    ],
    name: 'setValue',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'proposalCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162001da038038062001da08339810160408190526200003491620002c2565b600080546001600160a01b0319163317905580518251146200008d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000849062000467565b60405180910390fd5b60005b8251811015620000e3576060838281518110620000a957fe5b60200260200101519050620000d981848481518110620000c557fe5b6020026020010151620000ec60201b60201c565b5060010162000090565b50505062000555565b60008260405160200162000101919062000417565b60408051601f1981840301815282825280516020918201206000818152600190925291902084905591507f029f3e4ff72395e0d96bfd23210f0aedbd25e35510046dd09dc7f5d9363be1f1906200015e908590849086906200042c565b60405180910390a1505050565b600082601f8301126200017d57600080fd5b8151620001946200018e82620004a0565b62000479565b91508181835260208401935060208101905083856020840282011115620001ba57600080fd5b60005b83811015620001ea5781620001d3888262000259565b8452506020928301929190910190600101620001bd565b5050505092915050565b600082601f8301126200020657600080fd5b8151620002176200018e82620004a0565b81815260209384019390925082018360005b83811015620001ea57815186016200024288826200026c565b845250602092830192919091019060010162000229565b805162000266816200053b565b92915050565b600082601f8301126200027e57600080fd5b81516200028f6200018e82620004c1565b91508082526020830160208301858383011115620002ac57600080fd5b620002b9838284620004fe565b50505092915050565b60008060408385031215620002d657600080fd5b82516001600160401b03811115620002ed57600080fd5b620002fb85828601620001f4565b92505060208301516001600160401b038111156200031857600080fd5b62000326858286016200016b565b9150509250929050565b6200033b81620004fb565b82525050565b60006200034e82620004e9565b6200035a8185620004ed565b93506200036c818560208601620004fe565b620003778162000531565b9093019392505050565b60006200038e82620004e9565b6200039a8185620004f6565b9350620003ac818560208601620004fe565b9290920192915050565b6000620003c5602483620004ed565b7f416c6c20696e70757473206d7573742068617665207468652073616d65206c6581527f6e67746800000000000000000000000000000000000000000000000000000000602082015260400192915050565b600062000425828462000381565b9392505050565b606080825281016200043f818662000341565b905062000450602083018562000330565b6200045f604083018462000330565b949350505050565b602080825281016200026681620003b6565b6040518181016001600160401b03811182821017156200049857600080fd5b604052919050565b60006001600160401b03821115620004b757600080fd5b5060209081020190565b60006001600160401b03821115620004d857600080fd5b506020601f91909101601f19160190565b5190565b90815260200190565b919050565b90565b60005b838110156200051b57818101518382015260200162000501565b838111156200052b576000848401525b50505050565b601f01601f191690565b6200054681620004fb565b81146200055257600080fd5b50565b61183b80620005656000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806386accd9e1161007157806386accd9e146101645780638c1e434414610177578063c5db37421461018a578063da35c66414610198578063dc6ab527146101a0578063e1c7392a146101b3576100b4565b8063013cf08b146100b957806312caba8d146100e7578063158ef93e14610107578063552410771461011c578063693ec85e1461012f57806369815a1b1461014f575b600080fd5b6100cc6100c7366004611091565b6101bb565b6040516100de96959493929190611533565b60405180910390f35b6100fa6100f5366004611133565b610323565b6040516100de9190611525565b61010f610336565b6040516100de9190611590565b61010f61012a366004611091565b610346565b61014261013d366004611133565b610689565b6040516100de919061159e565b61016261015d366004611167565b6106f4565b005b6101426101723660046110af565b610756565b610162610185366004610fd5565b61080d565b6101426100f5366004611133565b6101426109d5565b6101426101ae366004611091565b6109dc565b6101626109ee565b600281815481106101c857fe5b6000918252602091829020600691909102018054600180830154600280850180546040805161010096831615969096026000190190911692909204601f81018890048802850188019092528184526001600160a01b03909416965090949192918301828280156102795780601f1061024e57610100808354040283529160200191610279565b820191906000526020600020905b81548152906001019060200180831161025c57829003601f168201915b50505050600383015460048401805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815295969395939450908301828280156103105780601f106102e557610100808354040283529160200191610310565b820191906000526020600020905b8154815290600101906020018083116102f357829003601f168201915b5050506005909301549192505060ff1686565b60008061032f83610689565b9392505050565b600054600160a01b900460ff1681565b60006103506109d5565b82106103775760405162461bcd60e51b815260040161036e9061166a565b60405180910390fd5b600054600160a01b900460ff166103a05760405162461bcd60e51b815260040161036e9061163a565b6103a8610df5565b600283815481106103b557fe5b60009182526020918290206040805160c08101825260069390930290910180546001600160a01b03168352600180820154848601526002808301805485516101009482161594909402600019011691909104601f81018790048702830187018552808352949592949386019391929091908301828280156104775780601f1061044c57610100808354040283529160200191610477565b820191906000526020600020905b81548152906001019060200180831161045a57829003601f168201915b5050509183525050600382015460208083019190915260048301805460408051601f600260001961010060018716150201909416939093049283018590048502810185018252828152940193928301828280156105155780601f106104ea57610100808354040283529160200191610515565b820191906000526020600020905b8154815290600101906020018083116104f857829003601f168201915b50505091835250506005919091015460ff161515602091820152815190820151604051635dac577b60e11b815292935090916001600160a01b0383169163bb58aef691610565919060040161159e565b60206040518083038186803b15801561057d57600080fd5b505afa158015610591573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506105b59190810190611073565b6105d15760405162461bcd60e51b815260040161036e9061162a565b60a0820151156105f35760405162461bcd60e51b815260040161036e906115fa565b60016002858154811061060257fe5b906000526020600020906006020160050160006101000a81548160ff02191690831515021790555061063c82604001518360600151610ad8565b7f4de312d39cf05994ee12c0f281e9bec1e4dd4aaf00bd6a59db864fb39b8a885284836040015184606001516040516106779392919061169a565b60405180910390a15060019392505050565b60008054600160a01b900460ff166106b35760405162461bcd60e51b815260040161036e9061163a565b60016000836040516020016106c89190611519565b604051602081830303815290604052805190602001208152602001908152602001600020549050919050565b6000546001600160a01b0316331461071e5760405162461bcd60e51b815260040161036e9061167a565b600054600160a01b900460ff16156107485760405162461bcd60e51b815260040161036e9061168a565b6107528282610ad8565b5050565b60008054600160a01b900460ff166107805760405162461bcd60e51b815260040161036e9061163a565b600061078a610b53565b90506108028188888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b018190048102820181019092528981528b935091508990899081908401838280828437600092019190915250610bb592505050565b979650505050505050565b600054600160a01b900460ff166108365760405162461bcd60e51b815260040161036e9061163a565b848314801561084457508281145b6108605760405162461bcd60e51b815260040161036e9061164a565b600061086a610b53565b905060005b868110156109cb57606088888381811061088557fe5b602002820190508035601e19368490030181126108a157600080fd5b909101602081019150356001600160401b038111156108bf57600080fd5b368190038213156108cf57600080fd5b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394508a925089915085905081811061091457fe5b905060200201359050606086868581811061092b57fe5b602002820190508035601e193684900301811261094757600080fd5b909101602081019150356001600160401b0381111561096557600080fd5b3681900382131561097557600080fd5b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293506109bb92508791508590508484610bb5565b50506001909201915061086f9050565b5050505050505050565b6002545b90565b60016020526000908152604090205481565b6000546001600160a01b03163314610a185760405162461bcd60e51b815260040161036e9061160a565b600054600160a01b900460ff1615610a425760405162461bcd60e51b815260040161036e906115ea565b6000805460ff60a01b1916600160a01b178155604080518082019091526011815270676174656b65657065724164647265737360781b6020820152610a8690610323565b6001600160a01b03161415610aad5760405162461bcd60e51b815260040161036e9061165a565b6040517f5daa87a0e9463431830481fd4b6e3403442dfb9a12b9c07597e9f61d50b633c890600090a1565b600082604051602001610aeb9190611519565b60408051601f1981840301815282825280516020918201206000818152600190925291902084905591507f029f3e4ff72395e0d96bfd23210f0aedbd25e35510046dd09dc7f5d9363be1f190610b46908590849086906115bd565b60405180910390a1505050565b600080610b8860405180604001604052806011815260200170676174656b65657065724164647265737360781b815250610323565b90506001600160a01b038116610bb05760405162461bcd60e51b815260040161036e9061165a565b905090565b600080825111610bd75760405162461bcd60e51b815260040161036e9061161a565b610bdf610df5565b506040805160c0810182526001600160a01b038716808252600060208301819052828401889052606083018790526080830186905260a0830181905292516333a5ae2960e01b81529192916333a5ae2990610c3e9087906004016115ac565b602060405180830381600087803b158015610c5857600080fd5b505af1158015610c6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610c9091908101906111b7565b6020830181905290506000610ca36109d5565b6002805460018101808355600092909252855160069091027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace810180546001600160a01b039093166001600160a01b03199093169290921782556020808801517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf8301556040880151805195965093948894610d63937f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad001920190610e39565b506060820151600382015560808201518051610d89916004840191602090910190610e39565b5060a091909101516005909101805460ff19169115159190911790555060405133907f390b99fa7f85ec1b96b42582de05f5e232049646318320143fe275ff16fdbd9590610de090849086908c908c908c906116c9565b60405180910390a2925050505b949350505050565b6040518060c0016040528060006001600160a01b03168152602001600081526020016060815260200160008019168152602001606081526020016000151581525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610e7a57805160ff1916838001178555610ea7565b82800160010185558215610ea7579182015b82811115610ea7578251825591602001919060010190610e8c565b50610eb3929150610eb7565b5090565b6109d991905b80821115610eb35760008155600101610ebd565b60008083601f840112610ee357600080fd5b5081356001600160401b03811115610efa57600080fd5b602083019150836020820283011115610f1257600080fd5b9250929050565b8051610f24816117d8565b92915050565b8035610f24816117ef565b60008083601f840112610f4757600080fd5b5081356001600160401b03811115610f5e57600080fd5b602083019150836001820283011115610f1257600080fd5b600082601f830112610f8757600080fd5b8135610f9a610f958261173d565b611717565b91508082526020830160208301858383011115610fb657600080fd5b610fc1838284611792565b50505092915050565b8051610f24816117ef565b60008060008060008060608789031215610fee57600080fd5b86356001600160401b0381111561100457600080fd5b61101089828a01610ed1565b965096505060208701356001600160401b0381111561102e57600080fd5b61103a89828a01610ed1565b945094505060408701356001600160401b0381111561105857600080fd5b61106489828a01610ed1565b92509250509295509295509295565b60006020828403121561108557600080fd5b6000610ded8484610f19565b6000602082840312156110a357600080fd5b6000610ded8484610f2a565b6000806000806000606086880312156110c757600080fd5b85356001600160401b038111156110dd57600080fd5b6110e988828901610f35565b955095505060206110fc88828901610f2a565b93505060408601356001600160401b0381111561111857600080fd5b61112488828901610f35565b92509250509295509295909350565b60006020828403121561114557600080fd5b81356001600160401b0381111561115b57600080fd5b610ded84828501610f76565b6000806040838503121561117a57600080fd5b82356001600160401b0381111561119057600080fd5b61119c85828601610f76565b92505060206111ad85828601610f2a565b9150509250929050565b6000602082840312156111c957600080fd5b6000610ded8484610fca565b6111de81611776565b82525050565b6111de81611781565b6111de816109d9565b600061120182611764565b61120b8185611768565b935061121b81856020860161179e565b611224816117ce565b9093019392505050565b600061123982611764565b6112438185611771565b935061125381856020860161179e565b9290920192915050565b600061126a602583611768565b7f436f6e74726163742068617320616c7265616479206265656e20696e697469618152641b1a5e995960da1b602082015260400192915050565b60006112b1601983611768565b7f50726f706f73616c20616c726561647920657865637574656400000000000000815260200192915050565b60006112ea603083611768565b7f4f6e6c7920746865206f776e65722063616e20696e697469616c697a6520746881526f6520506172616d6574657253746f726560801b602082015260400192915050565b600061133c601c83611768565b7f6d65746164617461486173682063616e6e6f7420626520656d70747900000000815260200192915050565b6000611375601e83611768565b7f50726f706f73616c20686173206e6f74206265656e20617070726f7665640000815260200192915050565b60006113ae602583611768565b7f436f6e747261637420686173206e6f7420796574206265656e20696e697469618152641b1a5e995960da1b602082015260400192915050565b60006113f5602483611768565b7f416c6c20696e70757473206d7573742068617665207468652073616d65206c658152630dccee8d60e31b602082015260400192915050565b600061143b601283611768565b7126b4b9b9b4b7339033b0ba32b5b2b2b832b960711b815260200192915050565b6000611469601283611768565b71125b9d985b1a59081c1c9bdc1bdcd85b125160721b815260200192915050565b6000611497602583611768565b7f4f6e6c7920746865206f776e65722063616e2073657420696e697469616c2076815264616c75657360d81b602082015260400192915050565b60006114de602683611768565b7f43616e6e6f74207365742076616c75657320616674657220696e697469616c698152653d30ba34b7b760d11b602082015260400192915050565b600061032f828461122e565b60208101610f2482846111d5565b60c0810161154182896111d5565b61154e60208301886111ed565b818103604083015261156081876111f6565b905061156f60608301866111ed565b818103608083015261158181856111f6565b905061080260a08301846111e4565b60208101610f2482846111e4565b60208101610f2482846111ed565b6020808252810161032f81846111f6565b606080825281016115ce81866111f6565b90506115dd60208301856111ed565b610ded60408301846111ed565b60208082528101610f248161125d565b60208082528101610f24816112a4565b60208082528101610f24816112dd565b60208082528101610f248161132f565b60208082528101610f2481611368565b60208082528101610f24816113a1565b60208082528101610f24816113e8565b60208082528101610f248161142e565b60208082528101610f248161145c565b60208082528101610f248161148a565b60208082528101610f24816114d1565b606081016116a882866111ed565b81810360208301526116ba81856111f6565b9050610ded60408301846111ed565b60a081016116d782886111ed565b6116e460208301876111ed565b81810360408301526116f681866111f6565b905061170560608301856111ed565b818103608083015261080281846111f6565b6040518181016001600160401b038111828210171561173557600080fd5b604052919050565b60006001600160401b0382111561175357600080fd5b506020601f91909101601f19160190565b5190565b90815260200190565b919050565b6000610f2482611786565b151590565b6001600160a01b031690565b82818337506000910152565b60005b838110156117b95781810151838201526020016117a1565b838111156117c8576000848401525b50505050565b601f01601f191690565b6117e181611781565b81146117ec57600080fd5b50565b6117e1816109d956fea365627a7a72315820031072c1d4b11a88244ac57a383c449ce7477dd4fb3e6909fe8a9b226efa7ed56c6578706572696d656e74616cf564736f6c634300050b0040';

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface ChainRunnersInterface extends ethers.utils.Interface {
  functions: {
    'addToEarlyAccessList(address[])': FunctionFragment
    'allocateFounderMint(address,uint256)': FunctionFragment
    'approve(address,uint256)': FunctionFragment
    'balanceOf(address)': FunctionFragment
    'checkHash(string)': FunctionFragment
    'configureRunnerZero(uint256,uint256)': FunctionFragment
    'earlyAccessMintedCounts(address)': FunctionFragment
    'earlyAccessStartTimestamp()': FunctionFragment
    'founderMint(uint256)': FunctionFragment
    'getApproved(uint256)': FunctionFragment
    'getDna(uint256)': FunctionFragment
    'getRemainingEarlyAccessMints(address)': FunctionFragment
    'getRemainingFounderMints(address)': FunctionFragment
    'isApprovedForAll(address,address)': FunctionFragment
    'isEarlyAccessOpen()': FunctionFragment
    'isOnEarlyAccessList(address)': FunctionFragment
    'isPublicSaleOpen()': FunctionFragment
    'mintEarlyAccess(uint256)': FunctionFragment
    'mintPublicSale(uint256)': FunctionFragment
    'mintRunnerZero(string)': FunctionFragment
    'name()': FunctionFragment
    'owner()': FunctionFragment
    'ownerOf(uint256)': FunctionFragment
    'publicSaleStartTimestamp()': FunctionFragment
    'removeFromEarlyAccessList(address[])': FunctionFragment
    'renderingContractAddress()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'safeTransferFrom(address,address,uint256)': FunctionFragment
    'setApprovalForAll(address,bool)': FunctionFragment
    'setEarlyAccessTimestamp(uint256)': FunctionFragment
    'setPublicSaleTimestamp(uint256)': FunctionFragment
    'setRenderingContractAddress(address)': FunctionFragment
    'supportsInterface(bytes4)': FunctionFragment
    'symbol()': FunctionFragment
    'tokenByIndex(uint256)': FunctionFragment
    'tokenOfOwnerByIndex(address,uint256)': FunctionFragment
    'tokenURI(uint256)': FunctionFragment
    'tokenURIForSeed(uint256,uint256)': FunctionFragment
    'totalSupply()': FunctionFragment
    'transferFrom(address,address,uint256)': FunctionFragment
    'transferOwnership(address)': FunctionFragment
    'withdraw()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'addToEarlyAccessList', values: [string[]]): string
  encodeFunctionData(
    functionFragment: 'allocateFounderMint',
    values: [string, BigNumberish],
  ): string
  encodeFunctionData(functionFragment: 'approve', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string
  encodeFunctionData(functionFragment: 'checkHash', values: [string]): string
  encodeFunctionData(
    functionFragment: 'configureRunnerZero',
    values: [BigNumberish, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'earlyAccessMintedCounts',
    values: [string],
  ): string
  encodeFunctionData(
    functionFragment: 'earlyAccessStartTimestamp',
    values?: undefined,
  ): string
  encodeFunctionData(functionFragment: 'founderMint', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'getApproved', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'getDna', values: [BigNumberish]): string
  encodeFunctionData(
    functionFragment: 'getRemainingEarlyAccessMints',
    values: [string],
  ): string
  encodeFunctionData(
    functionFragment: 'getRemainingFounderMints',
    values: [string],
  ): string
  encodeFunctionData(
    functionFragment: 'isApprovedForAll',
    values: [string, string],
  ): string
  encodeFunctionData(functionFragment: 'isEarlyAccessOpen', values?: undefined): string
  encodeFunctionData(functionFragment: 'isOnEarlyAccessList', values: [string]): string
  encodeFunctionData(functionFragment: 'isPublicSaleOpen', values?: undefined): string
  encodeFunctionData(functionFragment: 'mintEarlyAccess', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'mintPublicSale', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'mintRunnerZero', values: [string]): string
  encodeFunctionData(functionFragment: 'name', values?: undefined): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'ownerOf', values: [BigNumberish]): string
  encodeFunctionData(
    functionFragment: 'publicSaleStartTimestamp',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'removeFromEarlyAccessList',
    values: [string[]],
  ): string
  encodeFunctionData(
    functionFragment: 'renderingContractAddress',
    values?: undefined,
  ): string
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'safeTransferFrom',
    values: [string, string, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'setApprovalForAll',
    values: [string, boolean],
  ): string
  encodeFunctionData(
    functionFragment: 'setEarlyAccessTimestamp',
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'setPublicSaleTimestamp',
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'setRenderingContractAddress',
    values: [string],
  ): string
  encodeFunctionData(functionFragment: 'supportsInterface', values: [BytesLike]): string
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string
  encodeFunctionData(functionFragment: 'tokenByIndex', values: [BigNumberish]): string
  encodeFunctionData(
    functionFragment: 'tokenOfOwnerByIndex',
    values: [string, BigNumberish],
  ): string
  encodeFunctionData(functionFragment: 'tokenURI', values: [BigNumberish]): string
  encodeFunctionData(
    functionFragment: 'tokenURIForSeed',
    values: [BigNumberish, BigNumberish],
  ): string
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish],
  ): string
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string
  encodeFunctionData(functionFragment: 'withdraw', values?: undefined): string

  decodeFunctionResult(functionFragment: 'addToEarlyAccessList', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'allocateFounderMint', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'checkHash', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'configureRunnerZero', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'earlyAccessMintedCounts',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'earlyAccessStartTimestamp',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'founderMint', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getApproved', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getDna', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getRemainingEarlyAccessMints',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'getRemainingFounderMints',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'isApprovedForAll', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isEarlyAccessOpen', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isOnEarlyAccessList', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isPublicSaleOpen', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'mintEarlyAccess', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'mintPublicSale', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'mintRunnerZero', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'ownerOf', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'publicSaleStartTimestamp',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'removeFromEarlyAccessList',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'renderingContractAddress',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'safeTransferFrom', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setApprovalForAll', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'setEarlyAccessTimestamp',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'setPublicSaleTimestamp',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'setRenderingContractAddress',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'tokenByIndex', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'tokenOfOwnerByIndex', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'tokenURI', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'tokenURIForSeed', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result

  events: {
    'Approval(address,address,uint256)': EventFragment
    'ApprovalForAll(address,address,bool)': EventFragment
    'GenerateRunner(uint256,uint256)': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
    'Transfer(address,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ApprovalForAll'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'GenerateRunner'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment
}

export class ChainRunners extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: ChainRunnersInterface

  functions: {
    addToEarlyAccessList(
      toEarlyAccessList: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    allocateFounderMint(
      _addr: string,
      _count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>

    checkHash(seed: string, overrides?: CallOverrides): Promise<[BigNumber]>

    configureRunnerZero(
      _runnerZeroHash: BigNumberish,
      _runnerZeroDNA: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    earlyAccessMintedCounts(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>

    earlyAccessStartTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>

    founderMint(
      _count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    getDna(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>

    getRemainingEarlyAccessMints(
      _addr: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>

    getRemainingFounderMints(
      _addr: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<[boolean]>

    isEarlyAccessOpen(overrides?: CallOverrides): Promise<[boolean]>

    isOnEarlyAccessList(arg0: string, overrides?: CallOverrides): Promise<[boolean]>

    isPublicSaleOpen(overrides?: CallOverrides): Promise<[boolean]>

    mintEarlyAccess(
      _count: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    mintPublicSale(
      _count: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    mintRunnerZero(
      seed: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    name(overrides?: CallOverrides): Promise<[string]>

    owner(overrides?: CallOverrides): Promise<[string]>

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    publicSaleStartTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>

    removeFromEarlyAccessList(
      toRemove: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    renderingContractAddress(overrides?: CallOverrides): Promise<[string]>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    setEarlyAccessTimestamp(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    setPublicSaleTimestamp(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    setRenderingContractAddress(
      _renderingContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>

    symbol(overrides?: CallOverrides): Promise<[string]>

    tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>

    tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    tokenURIForSeed(
      _tokenId: BigNumberish,
      seed: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>
  }

  addToEarlyAccessList(
    toEarlyAccessList: string[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  allocateFounderMint(
    _addr: string,
    _count: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>

  checkHash(seed: string, overrides?: CallOverrides): Promise<BigNumber>

  configureRunnerZero(
    _runnerZeroHash: BigNumberish,
    _runnerZeroDNA: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  earlyAccessMintedCounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

  earlyAccessStartTimestamp(overrides?: CallOverrides): Promise<BigNumber>

  founderMint(
    _count: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

  getDna(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  getRemainingEarlyAccessMints(
    _addr: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  getRemainingFounderMints(_addr: string, overrides?: CallOverrides): Promise<BigNumber>

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides,
  ): Promise<boolean>

  isEarlyAccessOpen(overrides?: CallOverrides): Promise<boolean>

  isOnEarlyAccessList(arg0: string, overrides?: CallOverrides): Promise<boolean>

  isPublicSaleOpen(overrides?: CallOverrides): Promise<boolean>

  mintEarlyAccess(
    _count: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  mintPublicSale(
    _count: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  mintRunnerZero(
    seed: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  name(overrides?: CallOverrides): Promise<string>

  owner(overrides?: CallOverrides): Promise<string>

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

  publicSaleStartTimestamp(overrides?: CallOverrides): Promise<BigNumber>

  removeFromEarlyAccessList(
    toRemove: string[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  renderingContractAddress(overrides?: CallOverrides): Promise<string>

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  'safeTransferFrom(address,address,uint256)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  'safeTransferFrom(address,address,uint256,bytes)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  setEarlyAccessTimestamp(
    timestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  setPublicSaleTimestamp(
    timestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  setRenderingContractAddress(
    _renderingContractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>

  symbol(overrides?: CallOverrides): Promise<string>

  tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  tokenOfOwnerByIndex(
    owner: string,
    index: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

  tokenURIForSeed(
    _tokenId: BigNumberish,
    seed: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  callStatic: {
    addToEarlyAccessList(
      toEarlyAccessList: string[],
      overrides?: CallOverrides,
    ): Promise<void>

    allocateFounderMint(
      _addr: string,
      _count: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    approve(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>

    checkHash(seed: string, overrides?: CallOverrides): Promise<BigNumber>

    configureRunnerZero(
      _runnerZeroHash: BigNumberish,
      _runnerZeroDNA: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    earlyAccessMintedCounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    earlyAccessStartTimestamp(overrides?: CallOverrides): Promise<BigNumber>

    founderMint(
      _count: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber]>

    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

    getDna(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    getRemainingEarlyAccessMints(
      _addr: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    getRemainingFounderMints(_addr: string, overrides?: CallOverrides): Promise<BigNumber>

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<boolean>

    isEarlyAccessOpen(overrides?: CallOverrides): Promise<boolean>

    isOnEarlyAccessList(arg0: string, overrides?: CallOverrides): Promise<boolean>

    isPublicSaleOpen(overrides?: CallOverrides): Promise<boolean>

    mintEarlyAccess(
      _count: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber]>

    mintPublicSale(
      _count: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber]>

    mintRunnerZero(seed: string, overrides?: CallOverrides): Promise<void>

    name(overrides?: CallOverrides): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

    publicSaleStartTimestamp(overrides?: CallOverrides): Promise<BigNumber>

    removeFromEarlyAccessList(
      toRemove: string[],
      overrides?: CallOverrides,
    ): Promise<void>

    renderingContractAddress(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides,
    ): Promise<void>

    setEarlyAccessTimestamp(
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    setPublicSaleTimestamp(
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    setRenderingContractAddress(
      _renderingContractAddress: string,
      overrides?: CallOverrides,
    ): Promise<void>

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>

    symbol(overrides?: CallOverrides): Promise<string>

    tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

    tokenURIForSeed(
      _tokenId: BigNumberish,
      seed: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>

    withdraw(overrides?: CallOverrides): Promise<void>
  }

  filters: {
    Approval(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null,
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; approved: string; tokenId: BigNumber }
    >

    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null,
    ): TypedEventFilter<
      [string, string, boolean],
      { owner: string; operator: string; approved: boolean }
    >

    GenerateRunner(
      tokenId?: BigNumberish | null,
      dna?: null,
    ): TypedEventFilter<[BigNumber, BigNumber], { tokenId: BigNumber; dna: BigNumber }>

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>

    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null,
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; tokenId: BigNumber }
    >
  }

  estimateGas: {
    addToEarlyAccessList(
      toEarlyAccessList: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    allocateFounderMint(
      _addr: string,
      _count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>

    checkHash(seed: string, overrides?: CallOverrides): Promise<BigNumber>

    configureRunnerZero(
      _runnerZeroHash: BigNumberish,
      _runnerZeroDNA: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    earlyAccessMintedCounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    earlyAccessStartTimestamp(overrides?: CallOverrides): Promise<BigNumber>

    founderMint(
      _count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    getDna(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    getRemainingEarlyAccessMints(
      _addr: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    getRemainingFounderMints(_addr: string, overrides?: CallOverrides): Promise<BigNumber>

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    isEarlyAccessOpen(overrides?: CallOverrides): Promise<BigNumber>

    isOnEarlyAccessList(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    isPublicSaleOpen(overrides?: CallOverrides): Promise<BigNumber>

    mintEarlyAccess(
      _count: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    mintPublicSale(
      _count: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    mintRunnerZero(
      seed: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    name(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    publicSaleStartTimestamp(overrides?: CallOverrides): Promise<BigNumber>

    removeFromEarlyAccessList(
      toRemove: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    renderingContractAddress(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    setEarlyAccessTimestamp(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    setPublicSaleTimestamp(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    setRenderingContractAddress(
      _renderingContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    symbol(overrides?: CallOverrides): Promise<BigNumber>

    tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    tokenURIForSeed(
      _tokenId: BigNumberish,
      seed: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>
  }

  populateTransaction: {
    addToEarlyAccessList(
      toEarlyAccessList: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    allocateFounderMint(
      _addr: string,
      _count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    checkHash(seed: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    configureRunnerZero(
      _runnerZeroHash: BigNumberish,
      _runnerZeroDNA: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    earlyAccessMintedCounts(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    earlyAccessStartTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>

    founderMint(
      _count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    getDna(
      _tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    getRemainingEarlyAccessMints(
      _addr: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    getRemainingFounderMints(
      _addr: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    isEarlyAccessOpen(overrides?: CallOverrides): Promise<PopulatedTransaction>

    isOnEarlyAccessList(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    isPublicSaleOpen(overrides?: CallOverrides): Promise<PopulatedTransaction>

    mintEarlyAccess(
      _count: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    mintPublicSale(
      _count: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    mintRunnerZero(
      seed: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    publicSaleStartTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>

    removeFromEarlyAccessList(
      toRemove: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    renderingContractAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    setEarlyAccessTimestamp(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    setPublicSaleTimestamp(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    setRenderingContractAddress(
      _renderingContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    tokenURI(
      _tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    tokenURIForSeed(
      _tokenId: BigNumberish,
      seed: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>
  }
}

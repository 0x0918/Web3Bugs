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
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';

interface CrvTokenAdapterInterface extends ethers.utils.Interface {
  functions: {
    'addressProvider()': FunctionFragment;
    'approvedRegistry()': FunctionFragment;
    'cssr()': FunctionFragment;
    'getLiquidity(address)': FunctionFragment;
    'getPrice(address)': FunctionFragment;
    'owned()': FunctionFragment;
    'supportLiquidity(address)': FunctionFragment;
    'supportPrice(address)': FunctionFragment;
    'update(address,bytes)': FunctionFragment;
    'updateCurveRegistry()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'addressProvider',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'approvedRegistry',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'cssr', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getLiquidity',
    values: [string],
  ): string;
  encodeFunctionData(functionFragment: 'getPrice', values: [string]): string;
  encodeFunctionData(functionFragment: 'owned', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'supportLiquidity',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'supportPrice',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'update',
    values: [string, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'updateCurveRegistry',
    values?: undefined,
  ): string;

  decodeFunctionResult(
    functionFragment: 'addressProvider',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'approvedRegistry',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'cssr', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getLiquidity',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'getPrice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owned', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'supportLiquidity',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'supportPrice',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'update', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'updateCurveRegistry',
    data: BytesLike,
  ): Result;

  events: {};
}

export class CrvTokenAdapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CrvTokenAdapterInterface;

  functions: {
    addressProvider(overrides?: CallOverrides): Promise<[string]>;

    approvedRegistry(overrides?: CallOverrides): Promise<[string]>;

    cssr(overrides?: CallOverrides): Promise<[string]>;

    getLiquidity(
      _asset: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getPrice(
      _asset: string,
      overrides?: CallOverrides,
    ): Promise<
      [
        [BigNumber, BigNumber] & {
          numerator: BigNumber;
          denominator: BigNumber;
        },
      ]
    >;

    owned(overrides?: CallOverrides): Promise<[string]>;

    supportLiquidity(
      _asset: string,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    supportPrice(_asset: string, overrides?: CallOverrides): Promise<[boolean]>;

    update(
      _asset: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    updateCurveRegistry(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  addressProvider(overrides?: CallOverrides): Promise<string>;

  approvedRegistry(overrides?: CallOverrides): Promise<string>;

  cssr(overrides?: CallOverrides): Promise<string>;

  getLiquidity(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

  getPrice(
    _asset: string,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber] & { numerator: BigNumber; denominator: BigNumber }
  >;

  owned(overrides?: CallOverrides): Promise<string>;

  supportLiquidity(_asset: string, overrides?: CallOverrides): Promise<boolean>;

  supportPrice(_asset: string, overrides?: CallOverrides): Promise<boolean>;

  update(
    _asset: string,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  updateCurveRegistry(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    addressProvider(overrides?: CallOverrides): Promise<string>;

    approvedRegistry(overrides?: CallOverrides): Promise<string>;

    cssr(overrides?: CallOverrides): Promise<string>;

    getLiquidity(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(
      _asset: string,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & { numerator: BigNumber; denominator: BigNumber }
    >;

    owned(overrides?: CallOverrides): Promise<string>;

    supportLiquidity(
      _asset: string,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    supportPrice(_asset: string, overrides?: CallOverrides): Promise<boolean>;

    update(
      _asset: string,
      _data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    updateCurveRegistry(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addressProvider(overrides?: CallOverrides): Promise<BigNumber>;

    approvedRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    cssr(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidity(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    owned(overrides?: CallOverrides): Promise<BigNumber>;

    supportLiquidity(
      _asset: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    supportPrice(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    update(
      _asset: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    updateCurveRegistry(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addressProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approvedRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cssr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLiquidity(
      _asset: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getPrice(
      _asset: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    owned(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportLiquidity(
      _asset: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    supportPrice(
      _asset: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    update(
      _asset: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    updateCurveRegistry(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
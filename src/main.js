/**
 * This file is part of eth-core-js.
 * Copyright (C) [2017-2019] by [Alessio Delmonti]
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 * @author Alessio Delmonti <alessio@dexlab.io>
 * @date 2017
 */

import HDWallet from './HDWallet';
import WatcherTx from './WatcherTx';
import xDAIHDWallet from './xdai/xDAIHDWallet';
import ENSResolver from './ethereum/ENSResolver';
import EthereumHDWallet from './ethereum/EthereumHDWallet';
import EthereumHDWalletKovan from './ethereum/EthereumHDWalletKovan';
import EthereumHDWalletRopsten from './ethereum/EthereumHDWalletRopsten';
import LegacyWallet from './ethereum/LegacyEthereum';
import Transaction from './Transaction';
import BasePlugin from './ethereum/plugins/base-plugin';

import compareAddresses from './utils/compareAddresses';
import amountToWei from './utils/amountTowei';

export {
  HDWallet,
  BasePlugin,
  WatcherTx,
  Transaction,
  xDAIHDWallet,
  ENSResolver,
  EthereumHDWallet,
  EthereumHDWalletKovan,
  EthereumHDWalletRopsten,
  LegacyWallet,
  compareAddresses,
  amountToWei,
};

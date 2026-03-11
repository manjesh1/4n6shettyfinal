---
template: blog-post
title: "Cryptocurrency Forensics: What Digital Artifacts Tell Investigators"
slug: Cryptocurrency_Forensics
date: 2026-01-15 11:20
description: Cryptocurrency investigations often look mysterious from the
  outside. People imagine complex blockchain analysis and advanced cryptography.
  While those techniques are important, many investigations actually begin much
  closer to home — on the suspect’s computer.
---
<!--StartFragment-->

Cryptocurrency investigations often look mysterious from the outside. People imagine complex blockchain analysis and advanced cryptography. While those techniques are important, many investigations actually begin much closer to home — on the suspect’s computer.

Operating systems leave behind **digital artifacts** whenever applications run, files are accessed, or network activity occurs. Cryptocurrency wallets, exchanges, and blockchain tools are no exception. By examining these artifacts, investigators can reconstruct user activity, identify wallet usage, and sometimes recover crucial evidence.

This blog explores some of the **key cryptocurrency-related artifacts investigators commonly encounter during Windows forensics.**

- - -

## 1. Wallet and Transaction Artifacts

The most obvious evidence appears when cryptocurrency wallets are installed locally on a system.

### Wallet Files

Most desktop wallets store data inside the user profile directory:

```

```

Examples include:

* **Bitcoin Core** – `wallet.dat`
* **Electrum** – wallet files under the Electrum directory
* **Exodus** – databases such as `.ldb` files

These files may contain:

* Wallet addresses
* Transaction history
* Encrypted private keys

Even if the files are deleted, investigators may still recover them through **file carving, shadow copies, or unallocated space analysis**.

### Prefetch Files

Windows Prefetch files (`.pf`) reveal which applications have been executed on a system.

Examples:

* `bitcoin-qt.exe.pf`
* `electrum.exe.pf`
* `exodus.exe.pf`

These files can show:

* When the wallet application was last run
* How many times it was executed

This helps establish whether a cryptocurrency wallet was actively used.

### Amcache.hve

The **Amcache** registry hive records metadata about executed programs, including SHA1 hashes of executables.

This allows investigators to confirm execution of wallet software such as:

* `electrum.exe`
* `monero-wallet-gui.exe`

Even if the program itself is later removed.

### SRUM (System Resource Usage Monitor)

SRUM logs system resource usage, including:

* Network activity
* CPU usage per application

If a wallet application shows network activity at a particular time, it may correlate with **blockchain synchronization or transaction broadcasts**.

- - -

## 2. Exchange and Browser-Based Artifacts

Not all cryptocurrency activity happens through local wallets. Many users interact with **web-based exchanges and wallet services**, leaving traces in browsers.

### Browser History

Browsers like Chrome, Edge, and Firefox store history in **SQLite databases**.

These records may reveal visits to:

* Cryptocurrency exchanges
* Online wallets
* Blockchain explorers
* Mixing services

The key artifacts are stored in files such as:

* `History`
* `Cookies`
* `WebCacheV01.dat`

### Downloads and Zone.Identifier

When a user downloads a wallet application, Windows often stores a **Zone Identifier** indicating the file came from the internet.

Example:

```

```

This artifact can reveal:

* The source URL
* When the wallet software was downloaded

### Cookies and Cache

Cookies and cached data may contain:

* Session tokens
* Authentication traces
* Web3 interaction data

These artifacts can help confirm logins to cryptocurrency services.

### Session Restore and Tab Files

Browsers sometimes preserve previously opened tabs during a crash or restart.

These can reveal past activity such as:

* Viewing blockchain explorers
* Accessing exchange dashboards
* Checking wallet balances

- - -

## 3. System Access Artifacts

Even if a wallet file itself is missing, Windows keeps track of user interactions with files and folders.

### Jump Lists and LNK Files

Jump Lists and shortcut files can show:

* Paths to wallet files
* When those files were accessed
* Which applications opened them

### OpenSaveMRU, RecentDocs, and ShellBags

These artifacts track user interaction with files and directories.

They may reveal:

* Access to wallet directories
* Removable drive paths
* Encrypted container locations

### UserAssist Keys

The **UserAssist registry keys** record programs launched through the Windows GUI.

This can confirm that a user ran:

* Cryptocurrency wallet applications
* Supporting tools

### Recycle Bin Artifacts

Deleted files may still leave traces inside:

```

```

Investigators sometimes recover:

* Deleted wallet backups
* Key files
* Exported wallet data

- - -

## 4. External Devices and Cold Wallet Evidence

Many cryptocurrency users store assets in **cold wallets or external storage devices**.

### USBSTOR Registry Keys

These registry entries record USB devices connected to the system.

They provide details such as:

* Device type
* Volume serial numbers
* Installation timestamps
* Last connection time

This can help identify devices used to store **hardware wallets or offline backups**.

### SetupAPI Logs

These logs record device installation events and can help confirm when a USB storage device was first connected.

### MountPoints2

MountPoints2 registry entries help link **specific users to external drives**, which can be important when multiple users share a machine.

- - -

## 5. Network and Blockchain Interaction Evidence

Cryptocurrency wallets interact heavily with networks, and Windows records traces of this activity.

### SRUM and WLAN Logs

These logs provide information such as:

* Network usage by applications
* Wi-Fi connections and SSIDs
* Timestamps of activity

This can help investigators correlate **network connectivity with blockchain transactions**.

### Firewall Logs and DNS Cache

Firewall and DNS artifacts can reveal outbound connections to:

* Blockchain nodes
* Exchange APIs
* Cryptocurrency infrastructure

These logs can support timeline reconstruction and transaction verification.

- - -

## Final Thoughts

Cryptocurrency investigations are not limited to blockchain analytics. **Operating system artifacts often provide the first clues** about wallet usage, transaction activity, and user intent.

By combining:

* wallet file analysis
* browser artifacts
* system access logs
* removable device traces
* network activity

investigators can reconstruct a detailed picture of cryptocurrency activity on a system.

And importantly, even when suspects attempt to delete evidence, **Windows artifacts frequently preserve traces that can still be recovered**.

- - -

*Note: The artifacts discussed here represent only a selected subset of those encountered in cryptocurrency forensic investigations. Many additional artifacts may be present depending on the operating system, wallet type, and user behavior.*

<!--EndFragment-->
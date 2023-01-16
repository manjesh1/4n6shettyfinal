---
template: blog-post
title: "Uncovering Hidden Clues: How Windows  Artifact Prefetch Can Help in
  Digital Forensics Investigations in Windows 11 Machine"
slug: /How-Windows-Artifact-Prefetch-Can-Help-in-Digital-Forensics-Investigations-in-Windows-11-Machine
date: 2023-01-15 10:00
description: prefetch
featuredImage: /assets/red-and-white-pizzeria-menu-business-presentation.png
---
Prefetch is a feature in Windows that helps the operating system quickly launch frequently used programs by preloading the necessary files into memory. This can speed up the start-up process and make the overall experience of using the computer more responsive.

Prefetch is a feature in Windows operating systems that stores information about recently run programs in order to speed up their launch time. The files are stored in the "Prefetch" folder located in the Windows system folder. In a forensic investigation, these files can be analyzed to determine which programs were recently run on a computer, as well as the date and time they were last executed. This information can be useful in determining the actions of a user or identifying any suspicious activity on a computer.

**While analysing the prefetch files, a forensic investigator can gather several types of evidence, including:**

1. **Programs that have been recently run on the computer:** The prefetch files contain a list of programs that have been run on a computer, along with the number of times they have been run and the date and time of the last execution.
2. **Deleted Programs:** Prefetch files can contain information about progams that have been deleted programs from a computer (Uninstalled), which may be useful in cases where evidence has been intentionally removed.
3. **Execution time of programs:** Prefetch Files contain embedded information about the date and time to execute the programs, which can be useful in identifying the different run times of the programs. 
4. **Execution of Broken Programs:** Even an Attempt to execution of the programs will be added as an entry in the prefetch folder.
5. **Full Path of the Program:** Prefetch files contain information about the programs that have been run on a computer, including the full path of the program executable. This information can be used to determine the location of the program on the computer's hard drive, which can be useful in identifying the source of the program and determining if it is legitimate or malicious.
6. **Disk Volume ID:** Prefetch files also contain the Disk Volume ID of the drive where the program was located, this information can be used to identify the specific drive and partition where the program was stored, and can also be used to identify removable storage devices that have been connected to the computer. This information can be useful in identifying the origin of the program and determining whether it was run from a local drive or a removable storage device.
7. **Traces of Malware:** Prefetch files can contain information about Dynamic Link Library (DLL) files that are used by programs, including malware. If a malware program uses a DLL file, information about that DLL file may be recorded in the prefetch file for the program. This information can be used to identify the presence of malware on a computer and track its activity.
8. **Execution of Portable Programs:** Prefetch files can contain information about portable programs that have been run on a computer, including the full path of the program executable and the date and time of the last execution. Portable programs are those that do not need to be installed on a computer and can be run directly from a USB drive or other portable storage device. If a portable program is run on a computer, information about that program may be recorded in the prefetch files. This information can be used to identify the presence of portable programs on a computer, determine the source of the program and track its activity.
9. **Traces of File Touched by File Wipers:** If a file wiper is used to delete files and folders from a computer, it may leave traces of those files and folders in the prefetch files. While parsing the file wipers program we might get the Last files and Folder that were deleted by File Wipers.

## **Quick Summary of Pre-fetch:**

![](/assets/processing-tor.exe-3d8aa4a9.pf-created-on-2023-01-15-094139-modified-on-2023-01-15-094403-last-accessed-on-2023-01-15-094530-executable-name-tor.exe-hash-3d8aa4a9-file-size-bytes-78-084-version-windows-10-or-windo.png)

**Prefetch Artifact Location:**`C:\Windows\Prefetch`

**Prefetch Files Extension:** .pf

`Windows 8 and Above – 1024 Prefetch Files are stored`

**Prefetch File Name Algorithm:** <EXE Name>-<Hexadecimal hash of File Path>
Example: TOR.EXE-3D8AA4A9.pf

**Hashing function** – produces a hash or multiple hashes that are building the final part of a Prefetch file name. As shown below diagram, I have executed the **prefetchhashcalculator** perl program that calculates that hashes of different prefetch file for more information [please refer article published on hexacorn](http://www.hexacorn.com/blog/2012/06/13/prefetch-hash-calculator-a-hash-lookup-table-xpvistaw7w2k3w2k8/)

![](/assets/screenshot_104.png "Prefetch file naming algorithm ")

**Prefetch Embedded Information:** 9 Number of Run Times Program Executed (Maximum 8 Execution Times + 1 File System Creation Time of the Prefetch File as shown in the a.bove diagram.

**File System Timestamps** 

**Creation Date:** First Time File is Executed 

**Last Accessed:** Last execution Time (Same as last run time embedded in .pf file)

> Note 1: If the Prefetch is deleted from the folder and then when the program is executed again after its original prefetch file is deleted then a new creation time is assigned
>
> Note 2: To Determine File Creation and last Executed time minus 10 seconds from the given file system timestamps, as the file doesn’t get created until 10 seconds after each execution as the prefetch service will monitor everything the application touches first 10 seconds of execution.
> Last Accessed: Last execution Time (Same as last run time embedded in .pf file)

**There are several free and open-source tools that can be used to parse Windows Prefetch files and extract useful information for forensic analysis. Some popular tools include:**

1. PECmd by EricZimmerman
2. Windows Prefetch Parser by Tzworks
3. WinPrefetchView by Nirsoft

**Case  Scenario: P﻿refetch Analysis on Latest Windows 11 OS**

![](/assets/processing-tor.exe-3d8aa4a9.pf-created-on-2023-01-15-094139-modified-on-2023-01-15-094403-last-accessed-on-2023-01-15-094530-executable-name-tor.exe-hash-3d8aa4a9-file-size-bytes-78-084-version-windows-10-or-w-3-.png)

In our experiment, we export the selected prefetch file (TOR.exe) based on above case scenario, and it will be analyzed using free & open source Tool. 

Tool Used: PECMD (Prefetch Explorer Command Line v1.5.0.0) by Eric Zimmerman 

![](/assets/processing-tor.exe-3d8aa4a9.pf-created-on-2023-01-15-094139-modified-on-2023-01-15-094403-last-accessed-on-2023-01-15-094530-executable-name-tor.exe-hash-3d8aa4a9-file-size-bytes-78-084-version-windows-10-or-w-4-.png "Filtered output: Analyis of Tor.exe Prefetch file using PEcmd ")

**Results:**

The new version of the tool even indicates Windows Version as 11 and Executable True  Flag. We can find files opened by the application (Tor.exe) within 10 seconds of it execution which includes the full path of executable and also extracts volume information, directory and files referenced, Last run times.

**Full Path of the Tor:**`\USERS\STARWHAT LUFFY\DESKTOP\TOR BROWSER\BROWSER\TORBROWSER\TOR\TOR.EXE`

**Disk Volume ID:** 7226EC21              |         **Number of TOR executed:** 3 

**First Time Program Executed:** 2022-01-11 08:26:57 **Last Run:** 2022-01-11 10:02:39

**Traces of AntiForensics Tools**

**Objectives:**

* Find the Execution of SDelete Application.
* Usage of SDelete Tool to Delete Tor Browser. 

SDelete is a data wiping tool and an excellent Antiforensic tool as it is signed by Microsoft. SDelete is a tool that irrecoverably deletes files, conforming to U.S. Department of Defense standard DoD 5220.22-M for the handling of classified information.

![](/assets/processing-tor.exe-3d8aa4a9.pf-created-on-2023-01-15-094139-modified-on-2023-01-15-094403-last-accessed-on-2023-01-15-094530-executable-name-tor.exe-hash-3d8aa4a9-file-size-bytes-78-084-version-windows-10-or-w-5-.png "Filtered output: Analyis of SDelete.exe Prefetch file using PEcmd ")

We can observe in above figure, the results fetched by the PECMD command for the SDELETE.EXE-FDA5B8E8.pf prefetch file concludes that SDelete has touched File's and Directory of the Tor Browser (Installed Folder) within 10 seconds (i.e: SDelete has Wiped Tor Browser Installed Folder which was saved in the Desktop)

**Overall Results:** 

**SDelete Path:** `\VOLUME{01d7f48026d4004b-7226ec21}\USERS\STARWHAT LUFFY\DOCUMENTS\SDELETE\SDELETE.EXE (Executable: True)`

**Volume Serial Number:** 7226EC21 (Serial Number of the Disk where SDelete was executed)

**Number of Times SDelete was Executed:** 9

**Created on:** 2022-01-11 10:04:34 (Filesystem Time)
**First Time Program Executed:** 2022-01-11 10:05:42
**Last accessed on:** 2022-01-11 10:52:39

**If you wish to disable prefetch, you can do so by following these steps:**

1. Press the **Windows key + R** to open the Run dialog box
2. Type **"regedit"** and press Enter
3. In the Registry Editor, navigate to the following key: `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management\PrefetchParameters`
4. Locate the value named "**EnablePrefetcher"** and double-click it
5. Change the value data to **"0"** (without quotes) and click OK.

Disabling prefetch will prevent Windows from creating new prefetch files and the existing prefetch files will not be updated. However, it's worth noting that disabling prefetch may slightly increase the time it takes for programs to launch, as the system will not have information about the program's execution history to optimize the launch process.
It's also worth noting that this modification will only affect the current user and not the entire system. If you need to disable prefetch for all users, you will have to repeat the above steps for each user account.

The EnablePrefetcher setting in Windows can have different values, which control the behavior of the prefetcher. The possible values are:

•	0: Disables the prefetcher.

•	1: Enables the prefetcher for application launch prefetching.

•	2: Enables the prefetcher for boot prefetching.

•	3: Enables both application launch and boot prefetching. This is the default value.

In conclusion, the Windows Prefetch files are valuable artifacts for forensic investigators as they can provide useful information about the execution of programs on a computer. The information contained in the Prefetch files can be used to reconstruct the activities of a user and to determine whether certain programs were used in connection with criminal activity. Some important information that can be obtained from analyzing Prefetch files include the names of the executed programs, their execution path, the timestamp of the execution, and the number of times the program has been run. Additionally, Prefetch files can be used to detect any anomalies such as the execution of unknown programs or execution at unusual times.The number of prefetch files on a system is limited, which means that older files may be deleted over time. To prevent the loss of important evidence, it is important to prioritize the collection of the prefetch directory , during acquisiton process, to ensure that the most recent files are preserved.
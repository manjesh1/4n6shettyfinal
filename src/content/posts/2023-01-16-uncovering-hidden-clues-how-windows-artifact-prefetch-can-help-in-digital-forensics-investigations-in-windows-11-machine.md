---
template: blog-post
title: "Uncovering Hidden Clues: How Windows  Artifact Prefetch Can Help in
  Digital Forensics Investigations in Windows 11 Machine"
slug: /.How-Windows-Artifact-Prefetch-Can-Help-in-Digital-Forensics-Investigations-in-Windows-11-Machine
date: 2023-01-16 10:00
description: prefetch
---
Prefetch is a feature in Windows that helps the operating system quickly launch frequently used programs by preloading the necessary files into memory. This can speed up the start-up process and make the overall experience of using the computer more responsive.

Prefetch is a feature in Windows operating systems that stores information about recently run programs in order to speed up their launch time. The files are stored in the "Prefetch" folder located in the Windows system folder. In a forensic investigation, these files can be analyzed to determine which programs were recently run on a computer, as well as the date and time they were last executed. This information can be useful in determining the actions of a user or identifying any suspicious activity on a computer.


**While analysing the prefetch files, a forensic investigator can gather several types of evidence, including:**

1. **Programs that have been recently run on the computer:** The prefetch files contain a list of programs that have been run on a computer, along with the number of times they have been run and the date and time of the last execution.


2. **Deleted Programs:** Prefetch files can contain information about files that have been deleted programs from a computer (Uninstalled), which may be useful in cases where evidence has been intentionally removed.
3. **Execution time of programs:** Prefetch Files contain embedded information about the time taken to execute the programs, which can be useful in identifying the different run times of the programs.
4. **Execution of Broken Programs:** Even an Attempt to execution of the programs will be added as an entry in the prefetch folder.
5. **Full Path of the Program:** Prefetch files contain information about the programs that have been run on a computer, including the full path of the program executable. This information can be used to determine the location of the program on the computer's hard drive, which can be useful in identifying the source of the program and determining if it is legitimate or malicious.
6. **Disk Volume ID:** Prefetch files also contain the Disk Volume ID of the drive where the program was located, this information can be used to identify the specific drive and partition where the program was stored, and can also be used to identify removable storage devices that have been connected to the computer. This information can be useful in identifying the origin of the program and determining whether it was run from a local drive or a removable storage device.
7. **Traces of Malware:** Prefetch files can contain information about Dynamic Link Library (DLL) files that are used by programs, including malware. If a malware program uses a DLL file, information about that DLL file may be recorded in the prefetch file for the program. This information can be used to identify the presence of malware on a computer and track its activity.
8. **Execution of Portable Programs:** Prefetch files can contain information about portable programs that have been run on a computer, including the full path of the program executable and the date and time of the last execution. Portable programs are those that do not need to be installed on a computer and can be run directly from a USB drive or other portable storage device. If a portable program is run on a computer, information about that program may be recorded in the prefetch files. This information can be used to identify the presence of portable programs on a computer, determine the source of the program and track its activity.
9. **Traces of File Touched by File Wipers:** If a file wiper is used to delete files and folders from a computer, it may leave traces of those files and folders in the prefetch files. While parsing the file wipers program we might get the Last files and Folder that were deleted by File Wipers.

## **Quick Summary of Pre-fetch:**



![](/assets/processing-tor.exe-3d8aa4a9.pf-created-on-2023-01-15-094139-modified-on-2023-01-15-094403-last-accessed-on-2023-01-15-094530-executable-name-tor.exe-hash-3d8aa4a9-file-size-bytes-78-084-version-windows-10-or-windo.png)

**Prefetch Artifact Location:**` C:\Windows\Prefetch`

**Prefetch Files Extension:** .pf

**Prefetch File Name Algorithm:** <EXE Name>-<Hexadecimal hash of File Path>
Example: TOR.EXE-3D8AA4A9.pf

**Hashing function** – produces a hash or multiple hashes that are building the final part of a Prefetch file name

`Windows 8 and Above – 1024 Prefetch Files are stored`

**Prefetch Embedded Information:** 9 Number of Run Times Program Executed (Maximum 8 Execution Times + 1 File System Creation Time of the Prefetch File as shown in the a.bove diagram.

**File System Timestamps** 

**Creation Date:** First Time File is Executed 

**Last Accessed:** Last execution Time (Same as last run time embedded in .pf file)

> Note 1: If the Prefetch is deleted from the folder and then when the program is executed again after its original prefetch file is deleted then a new creation time is assigned
>
> Note 2: To Determine File Creation and last Executed time minus 10 seconds from the given file system timestamps, as the file doesn’t get created until 10 seconds after each execution as the prefetch service will monitor everything the application touches first 10 seconds of execution.
> Last Accessed: Last execution Time (Same as last run time embedded in .pf file)

**Case  Scenario: P﻿refetch Analysis on Latest Windows 11 OS** 

d
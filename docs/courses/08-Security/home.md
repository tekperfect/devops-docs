# 🚨 Security

1. [📝 Course Description](#📝-course-description)
2. [🎯 Prerequisites](#🎯-prerequisites)
3. [🏆 Learning Outcomes](#🏆-learning-outcomes)
4. [📚 Lessons](#📚-lessons)


# 📝 Lesson Description

> This lesson will cover security concepts and best practices. The process of understanding how local and remove DoS attacks occur as well as how phishing attacks are crafted along with how to educate end users. 

# 🎯 Prerequisites

* [Tekperfect: Computer Setup](/lessons/computer-setup.md)
* [Lesson 01: Introduction](/courses/01-Introduction/home.md)

# 🏆 Learning Outcomes

Students by the end of the course will be able to build a system capable of scanning local and remote networks for vunerabilites and understand the basic and intermediate concepts associated with security best practices.

1. Understand the importance of good operating system and network security
1. Understand how to build security scanning devices and launch attacks in a sandbox environment
1. Implement and test for security best practices
1. Correlate scan results with real-world exploitation data (CISA KEV / EPSS) and produce a ranked, prioritized vulnerability report
1. Assess a modern containerized (Kubernetes) environment end to end: discover → scan → report → exploit

# 📚 Lessons

## Kali
[Kali](/courses/08-Security/lessons/kali.md)

## Metasploit M1 Build
[Metasploitable](/courses/08-Security/lessons/metasploitable-m1.md)

## DVWA Build
[DVWA](/courses/08-Security/lessons/dvwa.md)

## Metasploit Labs
[Kali](/courses/08-Security/lessons/metasploit-labs.md)

## Security Fundamentals

[Security Fundamentals](/courses/08-Security/lessons/security-fundamentals.md)

## cve-recon (Ranked Vulnerability Reporting)

[cve-recon](/courses/08-Security/lessons/cve-recon.md)

> Turns a raw nmap scan into a prioritized, client-ready risk report using CISA KEV and EPSS exploitation data. Builds directly on Security Fundamentals.

## Kubernetes Vulnerability Lab (Capstone)

[K8s Security Lab](/courses/08-Security/lessons/k8s-security-lab.md)

> The capstone that ties Docker, Kubernetes, and security together: deploy a cluster of vulnerable targets, scan it from inside with cve-recon, then identify and exploit. Requires the [Virtualization → Kubernetes](/courses/06-Virtualization/lessons/kubernetes.md) lesson first.

## Vault Secrets Management

[Vault](/courses/08-Security/lessons/vault.md)

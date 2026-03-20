# Ansible (Configuration Management)

Ansible is an open-source IT automation engine that automates provisioning, configuration management, application deployment, and orchestration.

## Installation

Ansible is agent-less, meaning you only need to install it on your "control node" (the machine from where you intend to run the commands) and it connects to your target machines via SSH.

### Ubuntu / Debian Based
```bash
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install ansible
```

### MacOS
To install Ansible safely on a Mac, use Homebrew:
```bash
brew install ansible
```

## Inventory (`hosts` file)

Ansible needs to know what machines it is connecting to. This is managed by an Inventory file.

Create a file called `hosts` (or `inventory.ini`):
```ini
[webservers]
192.168.1.10
192.168.1.11

[dbservers]
192.168.1.20
```

Verify your connectivity to the hosts using the `ping` module:
```bash
ansible all -i hosts -m ping
```

## Playbooks

A playbook is a YAML file containing a series of tasks to execute on the hosts.

Create a file named `playbook.yml`:
```yaml
---
- name: Setup Webservers
  hosts: webservers
  become: yes # Run with sudo privileges

  tasks:
    - name: Ensure Nginx is installed
      apt:
        name: nginx
        state: present

    - name: Ensure Nginx service is running
      service:
        name: nginx
        state: started
        enabled: yes
```

To run this playbook, use the `ansible-playbook` command:
```bash
ansible-playbook -i hosts playbook.yml
```

## Useful Commands

- `ansible` - Used to run ad-hoc tasks or single modules on computers in your inventory.
- `ansible-playbook` - The command to execute complete Ansibe playbooks.
- `ansible-galaxy` - A tool to install roles and collections shared by the Ansible community to speed up your automation recipes.
- `ansible-vault` - Used to encrypt sensitive data, such as passwords or keys, used in your playbooks.

# Terraform (Infrastrucutre as Code)

## Installation and Prep


### Terraform Windows Install 👇🏾
[![Terraform](terraform.png)

### Make sure Chocolatey is install for Windows and then run the following command `choco install terraform`


### Terraform Mac/Linux Install 👇🏾

![Terraform](terraform.png)

To use Terraform safely on your Mac you can use the following program

## AWS Vault

1. `brew install aws-vault`


# Add the Vault Credentials to your Keychain

2. `aws-vault add alfonso`
3. Enter Access Key Id: `xxxxxxxxxxxxxxxxxxxxxxx`
4. Enter Secret Key: `xxxxxxxxxxxxxxxxxxxxxxxxxx`
5. List credentials you just stored by running `aws-vault list`
6. Downloand and install the aws cli packages from the following url `https://awscli.amazonaws.com/AWSCLIV2.pkg`

# Install Terrafrom

`brew install terraform`

7. Verify terraform is installed correctely

8. By running `terraform` at the command line and it should diplays the options for the command


9. List aws-vault credentials aws

10. If the credentials you created are listed please proceed to the aws cli configuration command

# AWS CLI Configuration

11. Type in the following command `aws configure`

12. Press enter when asked to enter the AWS Access Key and AWS Secret.

13. Enter the region you want to deploy the AWS instance into

14. Press enter on the last option of the aws configure command and you are now ready to deploy using terrafrom.

15. cd to a folder where you have cloned your terraform code repository

16. Run the following command `aws-vault exec profile_name -- terraform init`

17. Run the following command `aws-vault exec profile_name -- terraform plan`

18. Run the following command `aws-vault exec profile_name -- terraform apply`

19. Please make sure your run the final command when you are finished with the instance you created `aws-vault exec profile_name -- terraform destroy`

20. You have now successfully created and destroyed an instance safely using terraform.


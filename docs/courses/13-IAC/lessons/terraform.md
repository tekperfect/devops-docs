# Terraform (Infrastrucutre as Code)

### Installation and Prep

Go to the following website and dowload the latest version of Terraform

https://www.terraform.io/downloads.html

### Verify Install

Run the following commands to verify Terrform is installed `terraform'

The output of the command should look something like this.

Usage: terraform [-version] [-help] <command> [args]

The available commands for execution are listed below.
The most common, useful commands are shown first, followed by
less common or more advanced commands. If you're just getting
started with Terraform, stick with the common commands. For the
other commands, please read the help and docs before usage.

Common commands:

    apply              Builds or changes infrastructure

    console            Interactive console for Terraform interpolations

    destroy            Destroy Terraform-managed infrastructure

    env                Workspace management

    fmt                Rewrites config files to canonical format

    get                Download and install modules for the configuration

    graph              Create a visual graph of Terraform resources

    import             Import existing infrastructure into Terraform

    init               Initialize a Terraform working directory

    output             Read an output from a state file

    plan               Generate and show an execution plan

    providers          Prints a tree of the providers used in the configuration

    refresh            Update local state file against real resources

    show               Inspect Terraform state or plan

    taint              Manually mark a resource for recreation

    untaint            Manually unmark a resource as tainted

    validate           Validates the Terraform files

    version            Prints the Terraform version

    workspace          Workspace management

All other commands:

    0.12upgrade        Rewrites pre-0.12 module source code for v0.12

    debug              Debug output management (experimental)

    force-unlock       Manually unlock the terraform state

    push               Obsolete command for Terraform Enterprise legacy (v1)
    state              Advanced state management

## Get the example code

1. Login to your Github account

2. Prepare for lesson by forking the scripts repo

insert_image

3. Each of you are going to do the following edit the instance.tf key name and change it to your initials+tf-ubuntu

For Example: For me the key_name would be ah-tf-ubuntu.

4. If you see any other references to tf-ubuntu please make sure you change them to the new key name of your initials. Not doing so will cause your deploy to fail.

5. Edit your .gitignore file and add an ignore for the your initials+tf-ubuntu key

For Example: I would add an entry in my .gitignore file that looked like this ah-tf-ubuntu*

6. Edit the vars.tf file and replace the PATH_TO_PRIVATE_KEY and PATH_TO_PUBLIC_KEY names to the your initials+tf-ubuntu key and keyname.pub

For example: I would change the default = value in the vars.tf to be "ah-tf-ubuntu" and "ah-tf-ubuntu.pub"

7. Commit your changes and share the link to your code

8. Once you have done so I will share the key and secret with you via lastpass so that you can deploy your code.

9. Once I have checked your code you can proceed to the Terrform instructions portion of the lesson


### Prep your environment

1. Obtain keys to deploy code

2. Create a basic deploy script for a Linux and Windows instance

3. Run the following command to prepre your directory `terraform init`

### Deploy your code

1. Run the following commands once you believe you have all the right code in your repository

2. `terraform plan` (Verifies that the code you have written will allow you to deploy the kind of infrastrcuture you are interested in)

3. `terraform apply` (Deploys the code you created)

4. `terraform destroy` (Destroys the instance created by the Terraform code you deployed)

5. `terraform plan -out=plan-name` (Creates a Terraform plan that can be applied by the given name)

6. `terrafrom apply plan-name` (Applies the Terraform plan crated by the code and deploys the infrastructure change outlined in the plan.)

7. `terraform destroy plan-name` (Destroys infrastructure created by a specific Terraform plan)

### Considerations before deploying code

1. Where are you storing your secrets when deploying your code?

2. How secure are the files?

3. How do you prevent sensitive data from being checked into your repository?

4. What tools could you use to protect the secrets stored on your system? (Hint GPG)

5. What other measure could you take to protect the code you plan to deploy?

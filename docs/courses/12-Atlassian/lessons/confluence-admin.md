# Confluence Admin Guide




1. Choose Spaces > Create space from the Confluence header
2. Select the Blank space option and choose Next
3. Enter a Space name – for this space, we'll call it 'IT Documentation Home', as it's being used for the Landing page for the IT Team.
4. Change the Space key to 'IT' – this step isn't absolutely necessary, but it helps people if they're navigating to this space by name. The space key forms part of the URL, so making it a word or name makes it much easier to associate with your project.
5. Click Create


You now have a space set up for the IT team. Because everyone on the IT team need access to the information in this space, you don't need to do anything with the space's default permissions. It's visible to everyone in your organization, but not to the general public.


Every space has a default home page, which you can customize to suit your needs.
*  Add the following image and text to your space's home page to get things started. Just click Edit (or press E on your keyboard) to edit the home page, and copy and paste the text. 
* For the image it's best to drag it to your desktop and save it there, then drag it into your page. That'll make sure the image is attached directly to the page.
* Hit Save when you're happy with the home page.




### Create your personal space


* Create a project space
* Create your personal space
* Create the team's PR space
* Delete and archive spaces


As a newbie on the team, you might want to keep some work to yourself until you're ready to present it.


There's always the chance your mission commander will also send you some information that's 'for your eyes only,' and you'll need to keep that in a safe place.


For this part of the mission, we'll be creating a special type of space: a personal space. We'll be using your personal space like a sandbox, at least to start with – somewhere you can play around, draft pages, try out features, and generally see what spaces are capable of.


1. Create your personal space
2. Choose your profile picture at the right side of the Confluence header
3. Select Add Personal Space...
4. Hit Create
5. You've now got a space that you can call your own. But we still need to lock it down to make sure it's only visible to you.
6. Choose Space tools > Permissions from the bottom of the sidebar
7. Hit Edit Permissions (enter your password if prompted)
8. You should see the confluence-users group listed under Groups. To the left of the list of
permissions is the View permission, which determines whether everyone in that group can see your space.
9. Uncheck View and hit Save all at the bottom of the page


You're now the only one that can view this space. Feel free to try anything in this space, and store super secret stuff here.


Next


1. Create the team's PR space
2. Create a project space
3. Create your personal space
4. Create the team's PR space
5. Delete and archive spaces


Now it's time to go public; the world needs to know about the mission and its brave participants.
In this step, we'll create a team space and open it up to everyone. That's right – you can open Confluence spaces up to anonymous (not logged in) users.


1. Create a Team space
2. Choose Spaces > Create space from the header
3. Select Team Space and hit Next
4. Enter a Space name (let's call it 'Mars PR')
5. Change the Space key to 'MarsPR'
6. If there are other people using Confluence with you, feel free to add them as Team members (you can remove them later), or just stick with yourself for now
7. Paste this in as the Description: **Follow the progress of the brave Teams in Space astronauts as they embark on their mission to colonize Mars.**


Great! You now have a team space, again with its own home page. This home page is a little different to the project space and your personal space – you'll see any team members you added, listed on the home page.


Each space you create also has its own blog, so your social media team will be able to create posts in this space and speak directly to all those adoring fans. But none of those fans can see this space yet.


Allow anonymous access


It's time to let the world in by changing the permissions on this space.


1. Choose Space tools > Permissions from the bottom of the sidebar
2. Scroll down until you see Anonymous, then hit Edit Permissions
3. Tick the View permission for anonymous users and hit Save all


In order to allow anonymous access to your Confluence site, a site admin needs to grant
anonymous users the 'Use Confluence' permission. Don't worry if you can't do that, or if it's not
done; it's just something to note if you're opening up your Confluence site for real.




If you need to clean up old spaces (or destroy the evidence of a failed mission!), you can either archive or delete a space. **Archiving** just means it won't show up in the regular search, whereas deleting is obviously a lot more permanent.


**To archive a space:**
Choose Space tools > Overview from the bottom of the sidebar
Click Edit Space Details
Change the Status from 'Current' to 'Archived' and hit Save


**To delete a space:**
Choose Space tools > Overview from the bottom of the sidebar
Select the Delete Space tab


**What next?**
If you'd like to know more about spaces and the permissions that govern them, check out Spaces and Permissions and restrictions in the Confluence documentation.


### What is a space?


Spaces are Confluence's way of organizing content into meaningful categories. Think of it like having different folders into which you can put your work.


Spaces come in two main varieties:


**Site spaces** – These spaces are found in the Space Directory and are the areas where
you create content and collaborate with others. They are sometimes called **global spaces**.


**Personal spaces** – Every Confluence user can set up a personal space which they can
keep private or make public so others can view and edit. Personal spaces are listed in
the People Directory and found under your personal profile.




### How Do I Use a Space?


Create as many spaces as you need to get things done:


**Team spaces** – Give each team (QA, HR, Engineering, Support, ...) their own space so they can focus and make their information easier for everyone to find.


**Project spaces** – Put all the information related to your project in one place. This allows everyone to work together in Confluence instead of emailing back and forth.


**Personal space** – Store everything you're working on individually, keep your to-do lists, and polish any content before you move it into another shared space.






#### Edit space permissions


1. To change permissions for a space, choose Space tools > Permissions from the bottom of the sidebar,
2. then choose Edit Permissions to change permission settings.
3. See Assign Space Permissions for more details.


#### Permissions Summary


The following permissions can be assigned in a space:
#### Category Permission


* **All View** gives you permission to access the content in this space, and see it in the space directory and other places like the dashboard.
* **Delete own** gives you permission to delete any pages, blogs, attachments and comments you've created in this space (regardless of whether other users have subsequently edited the content).
* **Pages Add page** gives you permission to create new pages and edit existing pages in this space (assuming the page is not restricted for editing).
* **Delete page** gives you permission to delete any page in the space.
* **Blog Add blog** gives you permission to create new blog posts and edit existing blog posts in this space (assuming the blog post is not restricted for editing).
* **Delete page** gives you permission to delete any blog post in the space. Delete permission is also required to move a page or blog to a different space.


#### Attachments


* **Add attachment** gives you permission to upload (attach) files to pages and blog posts in this space.
* **Delete attachment** gives you permission to remove attached files from pages or blog posts in the space.


People with only Add page or blog permissions can still insert existing attached files in the
editor, and remove files from the editor, so they're not displayed on the page or blog post.
They can't however upload a new file, a new version of the file, or delete the attached file
itself.




* **Comments Add comments** gives you permission to add comments to a page, blog post or attached file.
* **Delete comments** gives you permission to delete any comment on a page, blog post or attached file.
* **Restrictions Add restrictions** gives you permission to apply page-level restrictions to a page or blog post. You can restrict a page for viewing, or just for editing.
* **Delete restrictions** gives you permission to remove restrictions from any page or blog post.
* **Mail Delete** mail gives you permission to delete mail items that have been archived in this space. This is not a commonly used feature.
* **Space Export** space gives you permission to export all the contents of the space to PDF, HTML or XML. This is different to single page exports - anyone who can view a page can also export it.
* **Admin gives** you permission to access all space administration tools, including things like permissions, templates, look and feel, and the ability to delete the whole space


#### How space permissions work


**Space permissions** are additive. If a user is granted permissions as an individual or as a member of one or more groups, Confluence will combine these permissions together. This is sometimes known as their effective permissions.


Sasha is a member of the confluence-users group and the developers group. 


The confluenceusers group has 'export' permission, but does not have 'restrict' permission. The developers group has 'restrict' permission but does not have 'export' permission.


By being a member of these two groups, Sasha can restrict and export content. The permissions do not conflict, they combine to determine what Sasha is allowed to do in this space.


If you have Confluence Data Center, Inspect permissions provides space admins and Confluence administrators a great way to view someone's effective permissions.


#### Who is the space admin?


The user who created the space is automatically a space administrator, and other users can also be granted Space Admin permission.


To find out who is an administrators in your space, either:


Go to Space Tools > Overview in the space.
Go to Spaces > Space Directory on the header, then choose theSpace Details icon beside the
Space.


If you accidentally deny all admin access to a space, so that nobody has access to administer the space any more, you can ask someone with Confluence Administrator global permission to recover Space Permissions.




#### Space admin superpowers


Space administrators can do a lot of things in the space such as:
* grant permissions to users and groups (and themselves)
* create templates
* change the look and feel
* delete the space
* manually remove page restrictions (including on pages they can't see)
* manage watchers, to change who is watching a page
* inspect permissions to see what users can do in the space (Data Center only)


Confluence administrators aren't necessarily space administrators. If they don't have the Space Admin permission (as an individual or member of a group), they can recover permissions to the space, which will grant them space admin permission.
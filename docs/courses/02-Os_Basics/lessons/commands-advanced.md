# Commands | Advanced

## Grep

This command allows you to search all the files in the path you specified for the exact text string you are looking for
grep 'string' /path-to-files

This command allows you to search all the files in the current directory for the exact text string you are looking for
grep 'string' *

This command allows you to search all the files in the current directory and subdirectories for the exact text string you are looking for… Note you may need to use sudo to run this command since it may need to traverse multiple directories

grep -r 'string' *

This command allows you to search all the files in the current directory for the text string you are looking for ignoring case

grep -i 'string' *

This command allows you to search all the files in the current directory for the text string you are looking for and it displays the filename and line the specific string is found in.

grep -w 'string' *


This command allows you to search all the files in the current directory for the text string you are looking for, ignores the case of the string, displays the filename the specific string is found in along with displaying the string in red.

egrep -Rwi --color 'string' *

This command allows you to search all the files in the current directory for the text string you are looking for, and only displays the filename and the text string you searched for.

grep -o 'string' *

This command allows you to search all the files in the current directory for the text string you are looking for, and only displays the filename the string is found in.

grep -l 'string' *

This command allows you to search all the files in the current directory for the text string you are looking for, and only displays the filename, the text string you searched for along with the line number the string was found on.

grep -n 'string' *


This command allows you to search all the files in the current directory for the text string you are looking for, and displays the filename along with a count of the number of times the string was found in a particular file.

grep -c 'string' *

This command allows you to search all the files in the current directory for the text string you are looking for, ignores the case of the string, displays the filename and line the specific string is found on along with displaying the string in red.

egrep -Rwin --color 'string' *


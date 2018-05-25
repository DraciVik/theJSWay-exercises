/*
Project: a social news program
Now that you've discovered the basics of programming, let's go ahead and build a real project.

Objective
The goal of this project is to build a basic social news program. Its users will be able to show a list of links and add new ones.

Functional requirements
A link is defined by its title, its URL and its author (submitter).
If a new link URL does not start with "http://" or "https://", "http://" is automatically added to its beginning.
At launch, the program displays a start menu with the possible actions in an alert window and asks the user for his choice. Possible actions are:
Show the list of links.
Add a new link.
Remove an existing link.
Quit the program.
Showing the list of links displays the index (rank) and the properties of each link in an alert window, or a message in the absence of any link.
When adding a link, the program asks the user for the new link properties (title, URL and author). The link is then created. Subsequently, it must appear in the shown links.
When removing a link, the user is asked for the link index until it is correct. The associated link is then removed. Subsequently, it must disappear from the shown links. Removing a link is not possible if there are no existing links.
After an action is performed, the start menu is shown again. This goes on until the user chooses to quit the program.
Technical requirements
All your code should be correctly indented.
Names should be wisely chosen and adhere to the camelCase convention.
Code duplication should be avoided.
*/
const myLinks = [];
class Links {
  constructor(title, url, author) {
    this.title = title;
    this.url = url;
    this.author = author;
  }
}

let userOption = Number(prompt(`Choose an option:
1 : Show links
2 : Add a link
3 : Remove a link
0 : Quit`
));
while(userOption !== 0) {
  if(userOption === 1) {
    const links = [];
    for(let i = 0; i < myLinks.length; i++) {
      links.push(`${i + 1}: ${myLinks[i].title} (${myLinks[i].url}). Author: ${myLinks[i].author}
      `);
    }
    alert(links);
  }
  if(userOption === 2) {
    let newTitle = "";
    let newURL = "";
    let newAuthor = "";
    newTitle = prompt(`Please enter the title`);
    newURL = prompt(`Enter the URL please`);
    if (newURL.startsWith("http://") === false) {
      if (newURL.startsWith("https://") === false) {
        newURL = "http://" + newURL;
      }
    }
    newAuthor = prompt(`Enter the author please`);
    myLinks.push(new Links(newTitle, newURL, newAuthor));
  }
  userOption = Number(prompt(`Choose an option:
  1 : Show links
  2 : Add a link
  3 : Remove a link
  0 : Quit`
  ));
}

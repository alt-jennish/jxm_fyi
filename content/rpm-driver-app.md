Title: Project Ike
Date: 2019
Author: Jenny
Image: thumbnails/rpm-driver-app-preview.png
Category: User Interfaces
Tags: Automation, Mobile App, Carrier Relations
Summary: An app that allows drivers to track their shipments

RPM has been in the process of modernizing many of its work processes. The logistics industry as a whole still relies on a lot of manual processes to move goods around the country. RPM wants to change that and automate as much of the tedious drudgery as possible.

Project Ike will address the most inefficient parts of the process that require the most human intervention: paperwork and status updates. RPM had neither the staff nor the institutional knowledge to create a mobile app so an outside company was contracted to develop the product.

RPM's development team is small and inexperienced with app development so the decision was made to outsource building the app to third party contractor. To ensure that RPM would be able to maintain and expand the app once they delivered the final product I works 4 days per week as part of their team developing the app in *C#*{: .language } using the *Xamarin Forms*{: .framework } framework.

On Site Experience
------------------

The vendor practices [extreme programming][extreme] which at a high level means pair programming, test driven development, and an agile workflow. I worked from their offices for three months pairing with different members of their team. I learned a lot about how unconventional business practices combined in the right ways can create an environment that maximizes employee moral and productivity.

Information Gathering
---------------------

During the initial meetings with the vendor a lot of information about the process, industry, and business had to be provided. We met with them numerous times over the course of two months as they gathered information and conducted their own research.

![Login Screen]({static}images/rpm-driver-app-login.png)

Their strengths are in gathering user research and developing rock solid software. I worked closely with the researchers and directed the design of the user interface so that it captured as much of the feedback gathered from the drivers who were interviewed while maintaining RPM's business needs.

Design
------

Creating a usable interface was challenging. There is a lot of ambiguity in moving freight across the country. While the simple case, one origin point and one destination (A to B), is also the most common, there are numerous exceptions. Other cases like multiple stops (A to B to C), stops where goods are picked up and dropped off, and returning to the origin (A to B to A) add a significant amount of complexity.

![Multi stop loads]({static}images/rpm-driver-app-current.png)

I relied heavily on the researchers who interviewed the end users along with some personal contacts who are truck drivers.

Development
-----------

After the initial specs were done and a low fidelity user interface was created, development began. I shifted to working from the vendor's office as part of the development team working with them to create the app using the Xamarin Forms framework.

![Drivers can search for new shipments from within the app]({static}images/rpm-driver-app-search.png)

Challenges
----------

During the three month development window RPM went through a lot of changes. Thirty-five new employees were hired, dozens of clients where onboarded, and the CEO handed the reins over to another executive. The app team faced increasing pressure from RPM's management to add more features in less time. They moved the deadline up several times and shaved a total of one month off the development timeline. The scope of the project also expanded to include several features the vendor advised developing in a later version, including a vehicle damage report that allowed users to touch the location on a vehicle to select damages.

![Drivers can touch vehicle illustrations to select damage]({static}images/rpm-driver-app-damage.png)

To date it was one of the more rewarding and enjoyable projects I have ever worked on. It was a tremendous learning opportunity for me personally, and for RPM.

[extreme]: https://en.wikipedia.org/wiki/Extreme_programming "Extreme Programming"

# 🩺 Doc On 
## Inspiration
Essential workers are crucial to our healthcare system. Even more, contactless care has never been needed more than now. Doc On allows a bi-directional communication system between Doctors and Patients using a web-application and sharing Documents. Our inspiration's center point is to offer a clean and intuitive experience to patients and doctors to communicate illnesses and upcoming appointments in one central hub.

## What it does
Doc On's mission is to provide a clean and powerful UI experience that has rich features for our clients. Our product is able to:

+ Create a Client (patient) and Admin (Doctor) account
+ Send Messages between each account (report illnesses, updates, and checkup)
+ Correctly match a patient with a doctor with the same insurance 
    + Insurance matching
+ Aggregate REST API to find the closest hospitals in the area
      + e.g RWJ in New Brunswick
+ View "health" progress using Google Charts react components
      + measures weight and blood pressure over a period of time
+ Doctors can view their patient's overviews
      + view patient's gender
      + view patient's requests over a period of time

## How we built it
Since our mission statement is to provide a clean user experience we chose our tools carefully
+ ReactJS for our frontend library 
+ Tailwind CSS to style of components
+ Firebase to query, update, create, and delete user data
+ Axios API to facilitate API requests from other services
+ React Bootstrap to plug-in lightweight components (e.g NavBars and Buttons)

## Challenges we ran into
+ Formatting JSON data from the REST API we aggregated from use difficult. Parsing the data took a lot of work especially to dynamically create data tables using React.
+ It was difficult to come out up a "valuable" idea that provides value to everyday people in the health bubble
+ It was difficult to come up with a way to keep the data consistent between sessions especially because we weren't too familiar with consistency between sessions in JavaScript.


## Accomplishments that we're proud of
+ Our team had excellent communication throughout the entire hackathon. 
+ Discovered a new way to style pages with TailwindCSS.
+ Making a platform that can be useful beyond this hackathon.
+ We were able to debug and test our code throughout the development process, taking an incremental development approach

## What we learned
+ For myself (Joel ) it was my first time using Tailwind CSS and Firebase so learning the technology took some time to learn and adapt
+ For myself (Karun) it was my first time developing a full potentially scalable application in a short amount of learning so learning efficient time management was crucial.
+ Designing web pages is a challenge on its own - that being said we were very happy with our final result in terms of user experience. We learned a lot about human behavior and how aesthetic plans can increase the value of a software product.

## What's next for Doc On
+ Doc On still has a lot of functionality to add such as ...
     + Doctor being capable to input patient data
     + Changing and Updating User Information
     + and more!
+ On the hardware side "Doc On" could be implemented as a modern and advanced pager for doctors in hospitals. Most doctors in hospitals use old and outdated pagers and our new product using the same tech stack and new hardware can transform the landscape of pagers for doctors. Calling it "Dock On"

# Offline weld robot programming evolves
*How one small job shop programs welds in the virtual world*

### THE FABRICATOR® APRIL 2016
APRIL 4, 2016

BY: TIM HESTON

*Several years ago Groupe Gravel invested in robotic welding and plasma cutting. And from the very start, for most work, technicians never programmed jobs using a teach pendant.*


Figure 1 
A workpiece is robotically welded at Groupe Gravel. The welding program was created and simulated offline.

Walk the floor of many custom fabricators, especially those that specialize in short-run and one-off jobs, and you may see a welding robot sitting in the corner, unused. It’s probably there because a major opportunity arose several years back, a higher-volume job perfect for robotic welding. The robot could access all the weld joints in one setup, and, most important, the fixturing and programming costs could be amortized over the long run.

To set up the cell, an operator probably had to spend time with a teach pendant, bringing the robot arm through the welding sequence point by point. Still, after the fixture was made and the weld program verified, the work was finished. If the order came up again, an operator could set up and run a program within minutes.

But then that large contract ended. Managers didn’t worry, though. The shop now had robotic welding capabilities to sell; surely it could land another job to fill the capacity, right? Not necessarily. Eventually the robot sat in the corner because the right job for it just didn’t come in the door.

So what is the “right job” for robotic welding? That depends on the situation, but much of it hinges on joint access (that is, whether the robot can access all the joints on a subassembly in one setup) and developing the fixtures and weld program.

Some custom fabricators do make use of robotic welding for short runs, as long as those short runs are repeatedly ordered throughout the year. The operation may even use quick-change fixture base plates that are placed on carts. Operators roll off the old fixture, roll on and affix the new one, load the new program, and start the next job within minutes.

But again, these are for repeat orders. If these were new orders, operators would need to program each new job with a teach pendant, point by point. Robots would spend a lot of time being programmed, and not much time producing parts. In these cases, it’s often just easier to weld the job manually and be done with it.

That’s the typical story, anyway. But Groupe Gravel isn’t typical. The job shop in Marieville, Quebec, Canada, has 25 employees who machine and fabricate parts for power generation, food processing, oil and gas, and other sectors. One-offs aren’t unusual. Some parts are new, while others are sent in for repair or refurbishing. Many jobs don’t come with prints, much less 3-D CAD files.

All the same, the company makes full use of its robotic arc welding and plasma cutting cell (see Figures 1 and 2), and all of it is programmed and simulated virtually.

An Unusual Job Shop

Laurent Gravel, company president, knows the approach is unusual, and he attributes this in part to the shop’s unusual history. His father began in the manufacturing business as a structural fabricator more than 40 years ago. But as construction slowed in the 1990s, the company branched out. Certain welding and fabrication customers began ordering subassemblies that called for machined parts.

“This is where the idea began for becoming a one-stop shop,” Gravel recalled, adding that the technology mix is quite unusual for the area. Most local shops specialize in fabrication or machining, but not both.


Figure 2 
The robot cell at Groupe Gravel has a plasma arc cutting attachment as well as a welding attachment.

For years company technicians programmed CNC milling and turning centers offline using Mastercam, and this experience, Gravel explained, shaped how the job shop approached robotic arc welding and plasma cutting: Employees programmed the company’s machining centers to run one-off parts all the time; why couldn’t the same be done for robotic welding and plasma cutting?

Offline Programming Roots

Offline programming and simulation of welding robots has a history partly rooted in the 1980s and early 1990s automotive business. That’s according to Chahe Bakmazjian, business team leader at Hypertherm Robotic Software Inc., a Saint-Laurent, Quebec-based robot programming software provider. (Formerly known as Jabez Technologies, the firm was acquired by Hypertherm last year.)

“Automotive lines are much more flexible than they were in the 1980s,” he said. “Back then, for these early approaches to offline programming and simulation, it didn’t matter if it took a highly paid specialist a week or two to program a part.

“The intent was to analyze the bottleneck in welding and free the constraint. The question was how to get the maximum number of parts per hour. There was such value in the work that the lead time and cost [of offline robotic weld programming] were justifiable. They’d implement a change, and the welding line was operational for at least a year.”

Task-based Programming

Offline weld programming often entails a point-by-point approach. In essence, it’s like putting a teach pendant in a virtual space. Gravel’s operation tackles the problem differently. Its offline weld programming software—Robotmaster from Hypertherm Robotic Software Inc.—takes a task-based approach. In the most basic terms, the software “looks” at the task at hand holistically (see Figures 3 and 4).

The programmer interacts with the weld path from beginning to end—what Bakmazjian referred to as a “spline”—and the software shows all the potential problems, including tool collisions, singularity issues (that is, problems with the robot’s rotational position), and joint inaccessibility—what the company calls an “error map.” Using a graphical interface, the programmer then clicks on each problem area and adjusts the spline to suit, optimizing the weld program.

For years the software, which has translators for various robot brands, has been collecting data from various users, Bakmazjian said. Using these scenarios, it now can suggest an optimal weld path that the weld programmer can tweak to suit.

As Bakmazjian explained, this task-based approach to offline robot programming develops a weld path with a set of criteria, all weighed against the robot’s reach, work envelope, part geometry, and fixturing. Some criteria are based on making the movement of the robot’s articulating joints as efficient as possible. Complementary to this is a set of criteria to minimize the acceleration. If the robot’s path from point A to B is efficient, with few changes in direction, it need not accelerate multiple times on the way.

Another set of criteria involves the robot’s ideal posture, or the position in which the robot has the best mechanical advantage. “Think of holding a grocery bag,” Bakmazjian said. “If you extend your arm straight down, it’s easy to hold the bag. You have mechanical advantage.” Conversely, if you lift your elbow partway, it takes more force (muscle) to hold the bag steady.

The same applies to a robot arm. “If I’m writing a program, and the task requires fine motor control, the actual mechanical configuration can make a big difference,” he said, adding that the robot’s ideal posture needs to be weighed against efficient robot arm movement. A robot may need to sacrifice efficient movement to attain better mechanical advantage.


Figure 3 
A complex circumferential fillet weld, with the workpiece mounted on a rotary positioner, is simulated offline.

Of course, programmers, especially those in a job shop or other high-product-mix situation, have no time to determine all this manually, which is why all the decision-making is baked into the software.

Groupe Gravel uses a FANUC robot with a Lincoln Surface Tension Transfer® (STT) power source for welding and an ESAB power source for plasma cutting. The company also uses a 2-axis rotary positioner, allowing the workpiece to be rotated and moved up and down. All this, Gravel said, is programmed and simulated offline.

What? No 3-D CAD File?

Gravel’s job shop often doesn’t have the luxury of a 3-D CAD file. Many jobs sent in for repair don’t have any drawing, period. And quite often these parts are the ones that require the quickest turnaround time. A late delivery on a repair can cost customers serious money. So for these parts, Groupe Gravel relies on its manual welders, right?

Not necessarily, Gravel said. For many parts the company uses a 3-D scanner from Creaform. Technicians hold the portable scanner over the part on all sides. The system collects data points and then converts them into an IGES file, which can be imported to the offline weld programming software. From here Gravel’s programmers build a fixture virtually around the part, then build the weld path.

Matching the Real With the Virtual

The programming system is designed so that, ideally, when a technician loads the new program and installs the part in the fixture, he should be able to start the program with no touch-ups required.

The robot’s wire tip acts like a touch probe, touching the joint surface to ensure the joint is where it’s supposed to be. This action can be written into the weld program or performed manually. Once it knows where the joint is, the program makes the appropriate adjustments, if any are required, and then commences welding.

As Gravel explained, this occurs regularly at his job shop. What makes this possible is not only the offline programming, but also the intelligence built into the welding system, including arc voltage control (AVC). This senses the electrical characteristics in process and allows the power source to make adjustments to welding variables on-the-fly.

Gravel added that offline weld programming doesn’t change the physics of welding. If a job required seam tracking before offline programming, because of inconsistencies in the weld joint, the job will continue to require such tracking.

Big Plans

The company has come a long way since it first integrated offline robot programming several years ago. The job shop never had a robot before offline programming, so instead of working from a foundation of manual robot programming, technicians drew from their CAM experience in the machining arena.

For maximum flexibility and throughput, Groupe Gravel is planning to purchase another robot dedicated to 3-D plasma cutting. As for the robot welding cell, Gravel is considering the use of flexible robot fixturing—that is, having a robot hold and manipulate a part while the other one welds. Also on the list is an electric heating-element attachment, which the robot can use to apply localized postweld heat treatment, which is of particular benefit for parts too large or awkward to transport to a separate oven.


Figure 4 
In this hypothetical (and somewhat extreme) welding program, shown at FABTECH® 2014, the areas marked in red and yellow show potential problems, like collisions or weld inaccessibility. To avoid them, the programmer moves the spline (line on the screen signifying the weld path) so that the path remains in the white area.

Groupe Gravel’s plans for its robotic welding and cutting belie the company’s size. Its approach shows just how far technology has come since the 1980s, when automotive engineers spent serious time programming and setting up robotic welding lines. 

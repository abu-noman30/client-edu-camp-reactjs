import React from 'react';

const Blog = () => {
	return (
		<>
			{/* Blog container */}

			<div id='questions-container' className='my-1 py-12 '>
				<div className='w-10/12 mx-auto bg-gray-100 p-4 md:p-10 lg:p-16 rounded-2xl shadow-lg'>
					<div className=' bg-white hover:bg-gray-50 border border-gray-200'>
						<h2 className='mb-0'>
							<button
								className='


flex
items-center
w-full
py-4
px-5
text-lg text-gray-800 text-left
bg-white
border-0
rounded-none
transition
focus:outline-none
font-bold
'
								type='button'
							>
								Q1: what is cors?
							</button>
						</h2>

						<div className='py-4 px-5'>
							<strong>Ans:</strong> CORS stands for “Cross Origin Resource Sharing”.
							<br />
							<br />
							<strong>By default,</strong> <u>all the web browsers block a request for a resource from an application if its made outside the application domain.</u>
							<br />
							<br />A resource can be anything such as, <br />A Javascript or HTML or CSS file Web service An application domain consists of <b>protocol://domainName:port</b> <br />
							No So technically, <u>even application running on same domain with different port numbers are considered 2 different applications by browser and any request from one application to another is blocked</u>.
							<br />
							<br />
							Now lets say, there are 2 applications hosted on different domains, lets call them application A (http://domain1.com:8080) and application B (http://domain2.com:8080).
							<br />
							Now assume that there is some service in app A that is valuable to app B. So app B has piece of code which tries to access the service in app A. This service will be blocked by web browser as A is on different domain than B. This makes
							application A and B secure and no one can access resources just as is on internet. But lets say application A and B is owned by the same person and he/she wishes to use some resources from A in B.
							<br />
							Than there comes the special application header such as <u>“Access-Control-Allow-origin”</u> which provides that power. Allow-Control-Allow-Origin header can be configured in HTTP server which serves all the request of an application.
							Using this header, one can open access for application running on different domain to their application resources. So lets say applicaton A uses Apache HTTP server as the web server and it configures the Allow-Control-Allow-Origin for
							the application B. Now when application B tries to use a resource on application A the web browser will allow the request to go through, because application A server itself has granted the permission. But any other application execept B
							tries to use the same resource, it will be blocked.
						</div>
					</div>
					<div className=' bg-white hover:bg-gray-50 border border-gray-200'>
						<h2 className='mb-0'>
							<button
								className='


flex
items-center
w-full
py-4
px-5
text-lg text-gray-800 text-left
bg-white
border-0
rounded-none
transition
focus:outline-none
font-bold
'
								type='button'
							>
								Q2: Why are you using firebase? What other options do you have to implement authentication?
							</button>
						</h2>

						<div className='py-4 px-5'>
							<strong>Ans:</strong> Firebase is a set of tools offered by Google to build excellent scalable applications in the cloud. It is a powerful service that helps in building applications quickly without reinventing the components or
							modules. Services like analytics, authentication, databases, configuration, file storage, push messaging are provided by firebase thereby making it easy for the developers to focus on the user experience of the application.
							<br />
							<br />
							Firebase authentication helps us to build the user authentication system for mobile/web application. It comes with the basic lifecycle methods like Login, Logout, Signup, reset password etc. Also it provides an ability to easily
							integrate our social oauth logins with a matter of few clicks.
							<br />
							<br />
							<b>ALTERNATIVES TO FIREBASE AUTHENTICATION:</b>
							<ul className='list-decimal py-2 px-8 flex flex-col md:flex-row font-medium'>
								<div className='mr-20'>
									<li>Auth0</li>
									<li>Passport</li>
									<li>Keycloak</li>
									<li>MongoDB</li>
								</div>
								<div className=''>
									<li>Okta</li>
									<li>JSON Web Token</li>
									<li>Amazon Cognito</li>
								</div>
							</ul>
						</div>
					</div>
					<div className=' bg-white hover:bg-gray-50 border border-gray-200'>
						<h2 className='mb-0'>
							<button
								className='


flex
items-center
w-full
py-4
px-5
text-lg text-gray-800 text-left
bg-white
border-0
rounded-none
transition
focus:outline-none
font-bold
'
								type='button'
							>
								Q3: How does the private route work?
							</button>
						</h2>

						<div className='py-4 px-5'>
							<strong>Ans:</strong> The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can
							only access the authenticated routes If he is authenticated (Logged in).
							<br />
							<br />
							we are wrap our original component inside the (/PrivateRoute) component and then passing this whole thing inside the element prop of (/Route) .By this we are returning the original component in the form of children if the user is logged
							in and if not then we are navigating to the /login route.
						</div>
					</div>
					<div className=' bg-white hover:bg-gray-50 border border-gray-200'>
						<h2 className='mb-0'>
							<button
								className='


flex
items-center
w-full
py-4
px-5
text-lg text-gray-800 text-left
bg-white
border-0
rounded-none
transition
focus:outline-none
font-bold
'
								type='button'
							>
								Q4: What is Node? How does Node work?
							</button>
						</h2>

						<div className='py-4 px-5'>
							<strong>Ans:</strong>
							<br />
							Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on
							chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
							<br />
							<br />
							<b>Working of Node.js:</b> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of
							threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent
							requests with a single thread without blocking it for one request.
							<br />
							<u>Node.js basically works on two concept:</u>
							<ul className='list-decimal py-2 px-8'>
								<li>Asynchronous</li>
								<li>Non-blocking I/O</li>
							</ul>
							<br />
							<b>Non-blocking I/o:</b> Non-blocking i/o means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for
							CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.
							<br />
							<br />
							<b>Asynchronous: </b>
							Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the
							node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.
							<br />
							To implement the concept of the system to handle the request node.js uses the concept of Libuv.
							<br />
							Libuv is an open-source library built-in C. It has a strong focus on asynchronous and I/O, this gives node access to the underlying computer operating system, file system, and networking.
							<br />
							<u>Libuv implements two extremely important features of node.js</u>
							<ul className='list-decimal py-2 px-8'>
								<li>Event loop</li>
								<li>Thread pool</li>
							</ul>
							<br />
							<b> Event loop: </b> The event loop contains a single thread and is responsible for handling easy tasks like executing callbacks and network I/O. When the program is to initialize all the top-level code is executed, the code is not in
							the callback function. All the applications code that is inside callback functions will run in the event loop. EventLoop is the heart of node.js. When we start our node application the event loop starts running right away. Most of the
							work is done in the event loop.
							<br />
							<u>Nodejs use event-driven-architecture:</u>
							<ul className=' list-decimal py-2 px-8 '>
								<li>Events are emitted.</li>
								<li>Event loop picks them up.</li>
								<li>Callbacks are called</li>
							</ul>
							<br />
							<b>Event queue: </b> As soon as the request is sent the thread places the request into a queue. It is known as an event queue. The process like app receiving HTTP request or server or a timer will emit event as soon as they are done
							with the work and event loop will pick up these events and call the callback functions that are associated with each event and response is sent to the client.
							<br />
							The event loop is an indefinite loop that continuously receives the request and processes them. It checks the queue and waits for the incoming request indefinitely.
							<br />
							<br />
							<b>Thread pool: </b> Though node.js is single-threaded it internally maintains a thread pool. When non-blocking requests are accepted there are processed in an event loop, but while accepting blocking requests it checks for available
							threads in a thread pool, assigns a thread to the client’s request which is then processed and send back to the event loop, and response is sent to the respective client.
							<br />
							<u>The thread pool size can be change:</u>
							<b> process.env.UV_THREADPOOL_SIZE = 1;</b>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;

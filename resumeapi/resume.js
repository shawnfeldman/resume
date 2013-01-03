var Resume = function () {
    this.getDetails = function () {
        return [
            {
                company:'Pearson',
                title:'Sr. Software Engineer',
                time:'3/27/2010-3/27/2011',
                overview:'Building Online Course Platform for High Schools and Universities serving 800k logins per day.',
                bullets:[
                    {description:"Collaborating with team of 6 developers/4 QA"},
                    {description:"Transitioning Tech Stack from SQL Server/.NET MVC 2/Dojo to Mongo/Node/Backbone/jQuery"},
                    {description:"Moving deployment environment from on premises to Amazon EC2."},
                    {description:"Developing asynchronous strategy to keep data synchronized between multiple subsystems."} ,
                    {description:"JavaScript Re-Architecture and Performance- Redesigned components of Online Courseware System to improve browser performance.  Optimized network load times and JavaScript in browser performance."}
                ]
            }
        ];
    };
    this.getHeader = function () {
        return {
            name:"Shawn Feldman",
            objective:"Software Engineer",
            skills:[
                {value:"JavaScript"},
                {value:"Node.js"},
                {value:"Backbone"},
                {value:"Require.js"},
                {value:".NET"},
                {value:"ASP.NET MVC/Web API"}
            ],
            bullets:[
                {description:"Experienced, Driven Software Architect"},
                {description:"Driven to Create Well Designed, Responsive Experiences "},
                {description:"Transitioning to OSS technologies MongoDB, Cassandra, Java + Node.js"}
            ],
            contact:[
                {value:'http://twitter.com/shawnfeldman', type:'link'},
                {value:"http://github.com/shawnfeldman", type:"link"},
                {value:"303-570-7734", type:"phone"},
                {value:"shawn.feldman@gmail.com", type:"email"}
            ]

        };
    };

};

exports.Resume = Resume;

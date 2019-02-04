const s3 = "https://s3.us-west-1.amazonaws.com/cg3media/work"

const Projects = {
    "all": {
        "hype-link": {
            "title": "Hype Link",
            "year": "2018",
            "urls": [ 
                { url: "https://hypel.ink/", text: "View Live Site" },
            ],
            "job": "Product + Development + Marketing",
            "thumbnail": s3 + "/hype-link/hypelink-thumb.png",
            "slider": [
                { "url": s3 + "/hype-link/hype-1.jpg" },
                { "url": s3 + "/hype-link/hype-2.jpg" },
                { "url": s3 + "/hype-link/hype-3.jpg" },
                { "url": s3 + "/hype-link/hype-4.jpg" }
            ],
            "headline": "One link for all of your links.",
            "description": `Hype Link is a product that was designed and developed by in-house.
                            It allows users to create a page and list links to their social media, content, websites, etc. 
                            They can create multiple pages and manage them all from one account.                
            `,
            "nerdy-details": "Built with Ruby on Rails, HTML, CSS, JS <br /> Deployed on Heroku"
        },
        "victor-oladipo": {
            "title": "Victor Oladipo",
            "year": "2018",
            "urls": [ 
                { url: "http://victoroladipo.com/", text: "View Live Site" },
            ],
            "job": "Website Development",
            "thumbnail": s3 + "/victor-oladipo/thumb.jpg",
            "slider": [
                { "url": s3 + "/victor-oladipo/2.jpg" },
                { "url": s3 + "/victor-oladipo/1.jpg" },
                { "url": s3 + "/victor-oladipo/3.jpg" },
                { "url": s3 + "/victor-oladipo/4.jpg" }
            ],
            "headline": "A fresh look for the NBA All-Star",
            "description": "Designed and developed a fresh website for NBA Pacers' Victor Oladipo. Victor's management team and I collaborated to create a central hub for his creative musical pursuits and accomplishments on the court.",
            "mobile-video": { "url": "s3 + //victor-oladipo/vic.mp4" },
            "nerdy-details": "Built with React, HTML, CSS <br /> CMS: Wordpress <br /> Design: Photoshop + Figma"
        },
        "off-top": {
            "title": "Off Top Records",
            "urls": [ 
                { url: "http://off-top.com/", text: "View Live Site" },
            ],
            "year": "2018",
            "job": "Development + Design",
            "thumbnail": s3 + "/off-top/off-top-thumb.jpg",
            "slider": [
                { "url": s3 + "/off-top/1.jpg" },
                { "url": s3 + "/off-top/2.jpg" },
                { "url": s3 + "/off-top/3.jpg" },
                { "url": s3 + "/off-top/4.jpg" }
            ],
            "headline": "Home for Hit Makers",
            "description": "We partnered with Off Top Records, home of several Grammy award winning and hit-making artists, to launch the first iteration of their website. The goal was to create a site that's clean, simple and focused on their artists. The site includes sections for their music, videos and online shop (Shopify).",
            "mobile-video": { "url": "s3 + //off-top/mockup.mp4" },
            "nerdy-details": "Built with JS, HTML, CSS <br /> CMS: Wordpress <br /> Design: Photoshop"
        },
        "fiends": {
            "title": "FIENDS",
            "year": "2018",
            "job": "Website Development",
            "urls": [ 
                { url: "http://fiends.nyc/", text: "View Blog" },
                { url: "http://fiends.nyc/live/", text: "View Tour Site" },
            ],
            "thumbnail": s3 + "/fiends/bas-thumbnail.jpg",
            "slider": [
                { "url": s3 + "/fiends/1.jpg" },
                { "url": s3 + "/fiends/2.jpg" },
                { "url": s3 + "/fiends/3.jpg" },
                { "url": s3 + "/fiends/4.jpg" }
            ],
            "headline": "Everybody FIENDS",
            "description": "We worked closely with Bas' team, FIENDS, over the course of two album release cycles to develop several marketing pages and the website for fiends.nyc, which includes Shopify integration and a Wordpress-powered blog. <br /> <br /> Both albums were released under Interscope Records via J. Cole's Dreamville label.",
            "mobile-video": { "url": s3 +  "/fiends/mobile.mp4" },
            "nerdy-details": "Built with JS, HTML, CSS <br /> CMS: Wordpress <br /> Design: Photoshop"
        },
        "bryson-tiller": {
            "title": "TRAP SOUL",
            "year": "2016",
            "job": "Development + Strategy + Design",
            "urls": [ 
                { url: "http://cg3media.s151936.gridserver.com/clients/bryson-full/", text: "Site" },
                { url: "http://cg3media.s151936.gridserver.com/clients/bryson-euro/", text: "Euro Tour" },
            ],
            "thumbnail": s3 + "/bryson/bryson-thumbnail.jpg",
            "slider": [
                { "url": s3 + "/bryson/bryson-2.jpg" },
                { "url": s3 + "/bryson/bryson-1.jpg" },
                { "url": s3 + "/bryson/bryson-3.jpg" },
            ],
            "headline": "The launch of an R&B superstar",
            "description": `In 2016, we partnered directly with Bryson Tiller & his label
                            RCA to create his first official website. Which included
                            his first official website, several tour sites, social media strategy, 
                            and design (in collaboration with Chase Ichiki). 
                            <br /><br />
                            Both sites are now offline. 
                            `,
            "mobile-video": {},
            "nerdy-details": "Design <br /> Built with JS, HTML, CSS"
        },
        "dom-kennedy": {
            "title": "Dom Kennedy",
            "year": "2016",
            "job": "Development + Photography + Design",
            "thumbnail": s3 + "/dom/dom-thumbnail.jpg",
            "urls": [ 
                { url: "http://cg3media.s151936.gridserver.com/clients/dom-la/", text: "Site 1" },
                { url: "http://cg3media.s151936.gridserver.com/clients/dom-preorder/", text: "Site 2" },
            ],
            "slider": [
                { "url": s3 + "/dom/dom-1.jpg" },
                { "url": s3 + "/dom/dom-2.jpg" },
                { "url": s3 + "/dom/dom-3.jpg" },
                { "url": s3 + "/dom/dom-5.jpg" },
            ],
            "headline": "Creative partnership with an LA legend",
            "description": `Between 2014 and 2016, we worked with Dom Kennedy on several projects
                            including merchandise design & photography, graphic design, and marketing
                            websites for his albums and tours
                            <br />
                            <br />
                            Sites are now offline. `,
            "mobile-video": {},
            "nerdy-details": "Photography <br/ > Graphic Design <br /> Built with JS, HTML, CSS"
        }
    }
}

export default Projects
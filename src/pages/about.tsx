import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Feature from '../components/Feature'

const PageTwo = () => (
  <IndexLayout>
    <Page>
      <Feature image>
        <h1>Hello,</h1>
        <h4>
          I'm <a>Halvor Fladsrud Bø</a>, a Software Engineer working at Palantir. A generalist. A nerd about algorithms, data and
          infrastructure.
        </h4>
      </Feature>
      <Container>
        <br />
        <br />
        <h1>Technologies</h1>
        <p>These are the technologies I've worked with in order of most to least.</p>
        <ul>
          <li>
            <b>Languages:</b> Python, Java, TS, Rust, C++, Go, Lisp
          </li>
          <li>
            <b>Datastores:</b> PostgreSQL, MySQL, Redis, BigTable, ElasticSearch, Cassandra
          </li>
          <li>
            <b>Cloud:</b> Google Cloud Platform, AWS, Azure
          </li>
          <li>
            <b>DevOps:</b> Kubernetes, Linux, Terraform
          </li>
          <li>
            <b>Data science:</b> Pandas, Spark, Tensorflow
          </li>
          <li>
            <b>Research:</b> Machine learning, text search, databases, distributed systems.
          </li>
        </ul>
        <br />
        <h3>Companies I've started</h3>
        <h4>Recrut (2018-2019)</h4>
        <p>Matching candidates with employees through machine learning. Acquired by Highered.</p>
        <a href="https://highered.global">Highered website</a>
        <h4>Favn (2020-Present)</h4>
        <p>A software company building innovative products. Both in house and helping other companies.</p>
        <a href="https://favn.com">Website</a>
        <h4>Complex Invest (2018-Present)</h4>
        {/* <p>Investing. The next Andreesen Horowitz, hopefully ;)</p> */}
        <br />
        <h3>Background</h3>
        <p>
          While going to school in Norway, I discovered programming around 2010. 2010-2017 I learned Python, HTML, CSS, JS, Django and Java
          as a hobby. Projects included a discussion forum, a beat analyzer connected to LEDs and a functional ransomware.{' '}
        </p>
        {/* <p>
          In 2017 I started studying Computer Engineering at NTNU. I took extra courses on low level programming and machine learning. A lot
          of time went into starting Recrut, a HR start-up. Using Django and React, we successfully launched our platform and got a lot of
          students at our university onboard, as well as some of cool companies - including Spacemaker (recently got aquired for 240M) and
          Cognite (just raised a round with Accel for 550M). In 2019 Highered aquired the company and our team went on to re-build their
          platform. The platform is used by over 250,000 students. In 2020 I started Favn, with the goal of quickly building a profitable
          start-up building software. Favn is currently profitable with 17 part-time employees and has helped multiple other start-ups get
          off the ground. I also participated in hackathons and competitive programming competitions.
        </p> */}
        <p>Since September 2020 I have worked at Palantir as Forward Deployed Software Engineer based in London.</p>
      </Container>
    </Page>
  </IndexLayout>
)

export default PageTwo

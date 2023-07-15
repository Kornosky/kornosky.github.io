import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Main from '../layouts/Main';

const Index = () => (
  <Main description={"Chris Kornosky's personal website."}>
    <Helmet>
      <title>Welcome to Chris Kornosky&apos;s Website</title>
      <meta name="description" content="Enter your desired description here" />
      <meta property="og:title" content="Welcome to Chris Kornosky's Website" />
      <meta
        property="og:description"
        content="Chris Kornosky's personal website."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="helmet.jpg" />
      <meta property="og:url" content="https://www.kornosky.site/" />
    </Helmet>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome!</Link>
          </h2>
          <p>
            <Link to="/about">Learn about me</Link>, or you can check out {' '}
            <Link to="/blog">my ramblings</Link>, or{' '}
            <Link to="/contact">contact</Link> me.
          </p>
        </div>
      </header>
      <p>
        I&apos;m an experienced technical leader with a passion for render
        operations, software development, and visual effects. I excell
        in fast-paced, deadline-driven environments,
        delivering consistent results. My expertise spans game development,
        visual effects, and leading cross-functional teams while providing
        guidance to emerging talent. I have a continuous thirst for
        learning, always seeking fresh challenges to drive innovation and
        push boundaries. I thrive in collaborative, dynamic settings that
        value creativity, innovation, and self-improvement.
      </p>
      <h3>
        Applications and frameworks that I work with
      </h3>
      <div className="trademarklogos">
        <img className="trademarklogo" src="https://www.shotgridsoftware.com/resources/images/theme/logo-autodesk-shotgrid.svg" alt="Shotgrid Logo" />
        <img className="trademarklogo" src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg" alt="Python Logo" />
        <img className="trademarklogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/RenderMan_Logo.svg/1200px-RenderMan_Logo.svg.png" alt="Renderman Logo" />
        <img className="trademarklogo" src="logos/foundry-nuke.svg" alt="Foundry Nuke Logo" />
        <img className="trademarklogo" src="https://www.awsthinkbox.com/dist/bb7940d16676876966e0c962e7e91f19.svg" alt="Foundry Nuke Logo" />
        <img className="trademarklogo" src="logos/unity.svg" alt="Unity Logo" />
        <img className="trademarklogo" src="https://godotengine.org/assets/logo_dark.svg" alt="Godot Logo" />
        <img className="trademarklogo" src="https://cdn2.unrealengine.com/ue-logo-stacked-unreal-engine-w-677x545-fac11de0943f.png" alt="Unreal Engine Logo" />
        <img className="trademarklogo" src="logos/Houdini_black_color.png" alt="Houdini Logo" />
      </div>
    </article>
  </Main>
);

export default Index;

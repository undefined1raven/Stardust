import * as React from "react";


const About = (props) => {

    if (props.about) {
        return (
            <div className="fullBkg">
                <div className="aboutContainer">
                    <div id="aboutLabel" className="noSelect">About</div>
                    <div id="projectLabel" className="noSelect">[Project Stardust]</div>
                    <div id="atfo" className="noSelect">by&nbsp;<a id="gitlink" target="blank" href="https://github.com/undefined1raven">undefined1raven↗</a>&nbsp;for 1503</div>
                    <div id="desc" className="noSelect">Ever since I read the research papers that led to this dataset, I wanted to build a different way of visualizing this data so this app represents that desire.</div>
                    <div id="linksLabel" className="noSelect">Links</div>
                    <ul id="linksList">
                        <li className="linkContainer noSelect x1"><a className="link" target="blank" href="http://fruity.oa-teramo.inaf.it/modelli.pl">Data Source ↗</a></li>
                        <li className="linkContainer noSelect x2"><a className="link" target="blank" href="https://webbtelescope.org/home">Stardust Pics :] ↗</a></li>
                        <li className="linkContainer noSelect x3"><a className="link" target="blank" href="https://ui.adsabs.harvard.edu/abs/2016ApJ...833..181C/abstract">Cristallo et al. 2016 ApJ, 833, 181 ↗</a></li>
                        <li className="linkContainer noSelect x4"><a className="link" target="blank" href="https://ui.adsabs.harvard.edu/abs/2015ApJS..219...40C/abstract">Cristallo et al. 2015 ApJS, 219, 40 ↗</a></li>
                        <li className="linkContainer noSelect x5"><a className="link" target="blank" href="https://ui.adsabs.harvard.edu/abs/2015ApJ...801...53C/abstract">Cristallo et al. 2015 ApJ, 801, 53 ↗</a></li>
                        <li className="linkContainer noSelect x6"><a className="link" target="blank" href="https://ui.adsabs.harvard.edu/abs/2014ApJ...785...77S/abstract">Straniero et al. 2014 ApJ, 787, 77 ↗</a></li>
                        <li className="linkContainer noSelect x7"><a className="link" target="blank" href="https://ui.adsabs.harvard.edu/abs/2013ApJ...774...98P/abstract">Piersanti et al. 2013 ApJ, 774, 98 ↗</a></li>
                        <li className="linkContainer noSelect x8"><a className="link" target="blank" href="https://ui.adsabs.harvard.edu/abs/2011ApJS..197...17C/abstract">Cristallo et al. 2011 ApJS, 197, 17 ↗</a></li>
                        <li className="linkContainer noSelect x9"><a className="link" target="blank" href="https://ui.adsabs.harvard.edu/abs/2009ApJ...696..797C/abstract">Cristallo et al. 2009 ApJ, 696, 797 ↗</a></li>
                        <li className="linkContainer noSelect x10"><a className="link" target="blank" href="https://ui.adsabs.harvard.edu/abs/2007ApJ...667..489C/abstract">Cristallo et al. 2007 ApJ, 667, 489 ↗</a></li>
                        <li className="linkContainer noSelect x11"><a className="link" target="blank" href="https://ui.adsabs.harvard.edu/abs/2006NuPhA.777..311S/abstract"> Straniero et al. 2006 Nuclear Physics A, 777, 311 ↗</a></li>
                    </ul>
                    <div onClick={props.onBackClick} className="noSelect backButton">Back</div>
                </div>
            </div>
        )
    } else {
        return '';
    }
}

export default About;
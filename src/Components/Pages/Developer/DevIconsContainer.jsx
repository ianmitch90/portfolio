import React from 'react';
import csharpIcon from '../../../Assets/devicons/csharp-line.svg'
import cssIcon from '../../../Assets/devicons/css3-original.svg'
import gitIcon from '../../../Assets/devicons/git-original.svg'
import handlebarsIcon from '../../../Assets/devicons/handlebars-original.svg'
import htmlIcon from '../../../Assets/devicons/html5-original.svg'
import jsIcon from '../../../Assets/devicons/javascript-original.svg'
import jqueryIcon from '../../../Assets/devicons/jquery-original-wordmark.svg'
import mochaIcon from '../../../Assets/devicons/mocha-plain.svg'
import mongodbIcon from '../../../Assets/devicons/mongodb-original-wordmark.svg'
import mysqlIcon from '../../../Assets/devicons/mysql-original-wordmark.svg'
import nodeIcon from '../../../Assets/devicons/nodejs-original.svg'
import postgresIcon from '../../../Assets/devicons/postgresql-original-wordmark.svg'
import pythonIcon from '../../../Assets/devicons/python-original.svg'
import reactIcon from '../../../Assets/devicons/react-original-wordmark.svg'
import sequalizeIcon from '../../../Assets/devicons/sequelize-original.svg'





// use this dumb component to organize import and send off a full list of svgs to use for develop.jsx 


function DevIconsContainer() {
    return (
        <div className='devLanguagesIcons'>
            <div className="col-xs-12">
            <img className='languageIcon' alt='html icon' src={htmlIcon} />
            <img className='languageIcon' alt='css icon' src={cssIcon} />
            <img className='languageIcon' alt='js icon' src={jsIcon} />
            <img className='languageIcon' alt='jquery icon' src={jqueryIcon} />
            <img className='languageIcon' alt='handle bars icon' src={handlebarsIcon} />

            </div>

            <div className="col-xs-12">
            <img className='languageIcon' alt='node icon' src={nodeIcon} />
            <img className='languageIcon' alt='mysql icon' src={mysqlIcon} />
            <img className='languageIcon' alt='mongo db icon' src={mongodbIcon} />
            <img className='languageIcon' alt='postgresql icon' src={postgresIcon} />
            <img className='languageIcon' alt='sequalize icon' src={sequalizeIcon} />

            </div>

            <div className="col-xs-12">
            <img className='languageIcon' alt='csharp icon' src={csharpIcon} />
            <img className='languageIcon' alt='python icon' src={pythonIcon} />
            <img className='languageIcon' alt='react icon' src={reactIcon} />
            <img className='languageIcon' alt='git icon' src={gitIcon} />
            <img className='languageIcon' alt='mocha icon' src={mochaIcon} />
            </div>


        </div>
    );
}


export default (DevIconsContainer);
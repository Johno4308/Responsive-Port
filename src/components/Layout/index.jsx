import { Outlet } from 'react-router-dom';
import Topbar from '../Topbar';
import './index.scss';

//layout component for showcased theme on all 4 pages
const Layout = () => {
    return(
        <div className="App">
            <Topbar />
            <div className='page'>
            <span className='tags top-tags'>
                <span className="purplefont">
                    import
                </span> 
                <span className="whitefont">
                    Johno
                </span>
                <span className="purplefont">
                    from
                </span>
                <span className="whitefont">
                    '../SouthAfrica'
                </span>  
                <br/>
                <br/>
                <span className="purplefont">
                    const
                </span>
                <span className="whitefont">
                    WebDeveloper
                </span>
                <span className="whitefont">
                    =
                </span>  
                <span className="whitefont">
                    ()
                </span>
                <span className="whitefont">
                    =&gt;
                </span>
                <span className="whitefont">
                    &#123;
                </span>  
            </span>
            <Outlet />      {/*outlet for layout as parent root element*/}
            <span className='tags bottom-tags'>
            <span className="whitefont">
                    &#125;
                </span> 
                <br/>
                <span className="purplefont">
                    export default
                </span> 
                <span className="purplefont">
                    Webdeveloper
                </span>    
            </span>
            </div>
        </div>
    )
}

export default Layout
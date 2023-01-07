
import './App.css';

function App() {
  return (
    <div className="App">
          <nav className="nav">
                <img src="bitcoin.svg" alt="" className="nav__logo" id="logo" />
                <ul className="nav__links">
                    <li className="nav__item">
                        <a className="nav__link" href="#section--1">Home</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#section--2">Case Studies</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#section--3">Questionair</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#section--4">Map Api</a>    
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#section--5">Data Overview</a>
                    </li>
                </ul>
          </nav>
          <div className="home">
            <div className="home_t">
              <h1>Business Forcasting Using Data Analysis</h1>
            </div>
            <div className="home_p"> 
            <p>This Application ensures the Forcasting of your <br /> Business in a certain location of Pakistan 
              by using Data Analysis</p>
            <button className="btn__Learnmore">Learn More</button>
            </div>
            <div className="home_i">
              <img className="img1" src="pie-chart-660.svg" alt="" /><br />
              <img className="img1" src="icons8-search-96(-xxxhdpi).png" alt="" />
              <img className="img1" src="scatter-graph.png" alt="" />
            </div>
          </div>
        
        <section className="Case_studies">
          <div className="header-cards">
                <div>
                  <div className="card_1">
                      <div className="card-header-1">Starting a new Business</div>
                      <p className="card-text-1">Conducting in-depth market research on your field and the demographics of your potential 
                      clientele is an important part of crafting a business plan. This involves running surveys, holding focus groups,
                       and researching SEO and public data.</p>
                  </div>
                </div>  
                <div>
                  <div className="card_2">
                      <div className="card-header-2">Research Purpose</div>
                      <p className="card-text-2">A Research can be conducted by many ways. Acessing the 
                      data freely can be used for research.data sets can contain records such as financial data,statistical data,
                      demographics of specific populations,insurance data,performance measures & assessment tools. 
                      This information can be used to plan and implement various procedures and policies</p>
                  </div>
                </div>
                <div>
                  <div className="card_3">
                      <div className="card-header-3">Success Rate</div>
                      <p className="card-text-3">Success rate is the fraction or percentage of success among a number of attempts 
                      to perform a procedure or task. <br /> <br /> How is the success rate determined ? <br />
                      <ol>
                        <li>Data Collection</li>
                        <li>Data Processing</li>
                        <li>Data Analysis</li>
                        <li>Data Visualization</li>
                        <li>Communicate results</li>
                      </ol>
                      <br />
                      Visualized data needs to be written in clearly and results should be shown in a classified and organized way.
                       </p>
                  </div>
                </div>
          </div>
        </section>
        <section className="Questionair">
          <div className='q_t'><h3>Are you a business owner</h3></div>
          <div className='q_start'>
          <div></div>
          <div><button>Yes</button></div>
          <div><button>No</button></div>
          </div>
        </section>
        <section className="Map_Api">
          <h2 className='h2'>Map Api</h2>
        </section>
        <footer className="footer">
          <p>Business Forcasting Using Data Analysis &copy; 2022</p>
        </footer>
    </div>
  );
}

export default App;

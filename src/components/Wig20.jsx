import styled from 'styled-components';
import CandleChart from "./charts/CandleChart";
import ChartOptions from "./charts/ChartOptions";

function Wig20() {
  return (
    <Wrapper>
      <h2>Wig20</h2>
      <hr />
      <div className="container">
        <div className="chart">
          <CandleChart />
        </div>
        <div className="options">
          <ChartOptions />
        </div>
      </div>
    </Wrapper> 
  )
}

const Wrapper = styled.div`
  margin: 20px;

  h2 {
    margin-left: 20px;
  }
  
  .container {
    display: flex;
    justify-content: center;

    .chart {
      padding: 10px;
      border: 1px solid #bbb;
      border-radius: 5px;
      display: inline-block;
    }
  }
`;

export default Wig20;
import React, { Component } from 'react';
import Chart from 'chart.js';
class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let ctx = document.getElementById("chartUser");
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["1-2017", "2-2017", "3-2017", "4-2017", "5-2017", "6-2017"],
          datasets: [{
              label: 'Tổng thành viên',
              data: [1015, 2002, 2405, 2900, 3521, 4152],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                  'rgba(255,99,132,1)',

              ],
              borderWidth: 1
          },
          {
              label: 'Cá nhân',
              data: [120, 300, 742, 1325, 2222, 3451],
              backgroundColor: [
                  'rgba(255, 244, 132, 0.2)',
              ],
              borderColor: [
                  'rgba(255,244,132,1)',

              ],
              borderWidth: 1
          },
          {
              label: 'Tổ chức',
              data: [220, 400, 1042, 1725, 2522, 3951],
              backgroundColor: [
                  'rgba(132, 244, 132, 0.2)',
              ],
              borderColor: [
                  'rgba(132,244,132,1)',

              ],
              borderWidth: 1
          },
        ]
      },
      options: {
        title: {
            display: true,
            text: 'Biểu đồ thành viên'
        },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true,

                  }
              }]
          }
      }
    });
    let ctxDetailUser = document.getElementById("chartDetailUser");
    let myPieChart = new Chart(ctxDetailUser,{
      type: 'pie',
      data: {
        labels: [
        "Cá nhân",
        "Tổ chức",
    ],
    datasets: [
        {
            data: [792, 324],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
            ]
        }]
      },
      options: {
        title: {
            display: true,
            text: 'Biểu đồ thành phần thành viên'
        },
        animation : {
            animateRotate : true
        }
      }
    });
    let ctxProject = document.getElementById("chartProject");
    let chartProject = new Chart(ctxProject, {
      type: 'line',
      data: {
          labels: ["1-2017", "2-2017", "3-2017", "4-2017", "5-2017", "6-2017"],
          datasets: [{
              label: 'Tổng số dự án',
              data: [1, 3, 7, 12, 15, 20],
              backgroundColor: [
                  'rgba(96,95,157, 0.2)',
              ],
              borderColor: [
                  'rgba(96,95,157,1)',
              ],
              borderWidth: 1
          }
        ]
      },
      options: {
        title: {
            display: true,
            text: 'Biểu đồ dự án'
        },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true,

                  }
              }]
          }
      }
    });
    let ctxMoney = document.getElementById("moneyProject");
    let chartMoney = new Chart(ctxMoney, {
      type: 'line',
      data: {
          labels: ["1-2017", "2-2017", "3-2017", "4-2017", "5-2017", "6-2017"],
          datasets: [{
              label: 'Tổng số vốn kêu gọi',
              data: [1252515, 1752515, 2672515, 4052515, 9167821, 12052852],
              backgroundColor: [
                  'rgba(255,127,80, 0.2)',
              ],
              borderColor: [
                  'rgba(255,127,80, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
        title: {
            display: true,
            text: 'Biểu đồ tổng số vốn kêu gọi'
        },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true,

                  }
              }]
          }
      }
    });
  }
  render() {
    return (
      <div className='dashboard'>
        <div className="row">
          <div className="title">
            <span>Biểu đồ thống kê</span></div>
          <div className="col-sm-6 chart-container">
            <div className="chart-card">
                <canvas id="chartUser" width="250" height="250"></canvas>
            </div>

          </div>
          <div className="col-sm-6 chart-container">
            <div className="chart-card">
                <canvas id="chartDetailUser" width="250" height="250"></canvas>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 chart-container">
            <div className="chart-card">
                <canvas id="chartProject" width="250" height="250"></canvas>
            </div>
          </div>
          <div className="col-sm-6 chart-container">
            <div className="chart-card">
                <canvas id="moneyProject" width="250" height="250"></canvas>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Dashboard;

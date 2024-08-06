import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Main.css'
import { FaBagShopping, FaBucket, FaBurger, FaCircleCheck, FaCirclePlus, FaCircleXmark, FaCoins, FaSortUp, FaStar } from 'react-icons/fa6';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BarGraph from '../BarGraph/BarGraph';
import { FaChevronRight, FaCrosshairs, FaSortDown } from 'react-icons/fa';
import { UserContext } from '../Provider/SidebarProvider';


const Dashboard = () => {
  const {show} = useContext(UserContext)

  const containerLeft = {
    paddingLeft : show ? '10px' : '60px',
    transition : 'padding-left 1s'
  }
  return (
    <Container style={containerLeft} className='text-white'>
      <h1 className='py-3 m-3'>Dashboard</h1>
      <Row className='my-3 g-2'>
      <Col lg={2} xs={6} md={4}>
        <div className='d-flex flex-column justify-content-between p-3 common_bg h-100'>
          <span className='top_icons_blue text-center position-relative top-0 left-0'>
            <FaBucket />
            <FaCirclePlus className='circle_plus_pos' />
          </span>
          <span>Total Orders</span>
          <div className='d-flex justify-content-between align-items-center'>
            <h3>75</h3>
            <span className='d-flex justify-content-center align-items-center growing_up_green'>
              <FaSortUp className='align-self-end' />
              <span>3%</span>
            </span>
          </div>
        </div>
      </Col>
      <Col lg={2} xs={6} md={4}>
        <div className='d-flex flex-column justify-content-between p-3 common_bg h-100'>
          <span className='top_icons_green text-center position-relative top-0 left-0'>
            <FaBagShopping />
            <FaCircleCheck className='circle_plus_pos' />
          </span>
          <span>Total Delivered</span>
          <div className='d-flex justify-content-between align-items-center'>
            <h3>70</h3>
            <span className='d-flex justify-content-center align-items-center text-danger'>
              <FaSortDown />
              <span>3%</span>
            </span>
          </div>
        </div>
      </Col>
      <Col lg={2} xs={6} md={4}>
        <div className='d-flex flex-column justify-content-between p-3 common_bg h-100'>
          <span className='top_icons_red text-center position-relative top-0 left-0'>
            <FaBagShopping />
            <FaCircleXmark className='circle_plus_pos' />
          </span>
          <span>Total Cancelled</span>
          <div className='d-flex justify-content-between align-items-center'>
            <h3>05</h3>
            <span className='d-flex justify-content-center align-items-center growing_up_green'>
              <FaSortUp className='align-self-end' />
              <span>3%</span>
            </span>
          </div>
        </div>
      </Col>
      <Col lg={2} xs={6} md={4}>
        <div className='d-flex flex-column justify-content-between p-3 common_bg h-100'>
          <span className='top_icons_pink text-center'>
            <FaCoins />
          </span>
          <span>Total Revenue</span>
          <div className='d-flex justify-content-between align-items-center'>
            <h3>$12k</h3>
            <span className='d-flex justify-content-center align-items-center text-danger'>
              <FaSortDown />
              <span>3%</span>
            </span>
          </div>
        </div>
      </Col>
      <Col lg={4} xs={12} md={8}>
        <div className='d-flex justify-content-between p-3 common_bg h-100 '>
          <div className='d-flex flex-column justify-content-between h-100'>
            <span>Net Profit</span>
            <h3 className='net_profit_cost'>$ 6759.25</h3>
            <span className='d-flex justify-content-start align-items-center growing_up_green'>
              <FaSortUp className='align-self-end' />
              <span>3%</span>
            </span>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center position-relative top-0 left-0 z-index-0'>
            <div style={{ width: '100px', height: '100px' }}>
              <CircularProgressbar
                value={70}
                text={`${70}%`}
                styles={buildStyles({
                  textColor: '#ffffff',
                  pathColor: '#0000ff',
                  trailColor: '#b0b0ff',
                  strokeLinecap: 'round',
                  textSize: '18px',
                })}
              />
            </div>
            <span className='circular_bar_span text-center'>Goal Completed</span>
            <span className='top_section_rounded_desc'>* The values here has been rounded off.</span>
          </div>
        </div>
      </Col>
    </Row>
      <Row className='g-2 my-3 w-100'>
        <Col lg={8} sm={12} md={8}>
            <div className='bar_graph_container common_bg p-3 '>
              <div className='d-flex justify-content-between align-items-center my-3'>
                  <h2>Activity</h2>
                  <button type="button" className='weekly_btn position-relative top-0 left-0'>
                    <FaSortDown className='position-absolute down_arrow_icon'/>
                    <select className='weekly_span_btn'>
                      <option value='daily'>Weekly</option>
                      <option value='weekly'>Daily</option>
                      <option value='monthly'>Monthly</option>
                    </select>
                  </button>
              </div>
              <div className='h-100'>
                <BarGraph/>
              </div>
            </div>
        </Col>
        <Col lg={4} sm={12} md={4}>
            <div className='common_bg d-flex flex-column justify-content-between h-100 p-3 w-100 gap-2'>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <div className='d-flex align-items-center gap-3'>
                      <span className='second_sec_icon_orange d-flex justify-content-center align-items-center'>
                        <FaCrosshairs/>
                      </span>
                      <span>Goals</span>
                    </div>
                    <button type='button' className='chevron_right_btn d-flex justify-content-center align-items-center'>
                        <FaChevronRight/>
                    </button>
                </div>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <div className='d-flex align-items-center gap-3'>
                      <span className='second_sec_icon_blue d-flex justify-content-center align-items-center'>
                        <FaBurger/>
                      </span>
                      <span>Popular Dishes</span>
                    </div>
                    <button type='button' className='chevron_right_btn d-flex justify-content-center align-items-center'>
                        <FaChevronRight/>
                    </button>
                </div>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <div className='d-flex align-items-center gap-3'>
                      <span className='second_sec_icon_green d-flex justify-content-center align-items-center'>
                        <FaBurger/>
                      </span>
                      <span>Menus</span>
                    </div>
                    <button type='button' className='chevron_right_btn d-flex justify-content-center align-items-center'>
                        <FaChevronRight/>
                    </button>
                </div>
            </div>
        </Col>
      </Row>
      <Row className='g-2 my-3 w-100'>
        <Col lg={8} sm={12}>
            <div className='common_bg p-3'>
              <h3>Recent Orders</h3>
              <table className='w-100'>
                <thead>
                  <tr>
                    <td className='py-3'>Customer</td>
                    <td className='py-3'>Order No.</td>
                    <td className='py-3'>Amount</td>
                    <td className='py-3'>Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border_bottom'>
                    <td className='d-flex align-items-center gap-3 py-3'>
                      <img src='./images/avatar-2.png' alt='avatar-2' className='table_avatar'/>
                      <span>Wade Warren</span>
                    </td>
                    <td className='py-3'>$243.00</td>
                    <td className='py-3'>74758575</td>
                    <td className='py-3'>
                      <span className='delivered_status'>Delivered</span>
                    </td>
                  </tr>
                  <tr className='border_bottom'>
                    <td className='d-flex align-items-center gap-3 py-3'>
                      <img src='./images/avatar-4.png' alt='avatar-2' className='table_avatar'/>
                      <span>Jane Cooper</span>
                    </td>
                    <td className='py-3'>54758344</td>
                    <td className='py-3'>$143.00</td>
                    <td className='py-3'>
                      <span className='delivered_status'>Delivered</span>
                    </td>
                  </tr>
                  <tr className='border_bottom'>
                    <td className='d-flex align-items-center gap-3 py-3'>
                      <img src='./images/avatar-3.png' alt='avatar-2' className='table_avatar'/>
                      <span>Guy Hawkins</span>
                    </td>
                    <td className='py-3'>29948959</td>
                    <td className='py-3'>$380.00</td>
                    <td className='py-3'>
                      <span className='cancelled_status'>Cancelled</span>
                    </td>
                  </tr>
                  <tr className='border_bottom'>
                    <td className='d-flex align-items-center gap-3 py-3'>
                      <img src='./images/avatar-4.png' alt='avatar-2' className='table_avatar'/>
                      <span>Kristin Watson</span>
                    </td>
                    <td className='py-3'>29887694</td>
                    <td className='py-3'>$100.00</td>
                    <td className='py-3'>
                      <span className='pending_status'>Pending</span>
                    </td>
                  </tr>
                  <tr className='border_bottom'>
                    <td className='d-flex align-items-center gap-3 py-3'>
                      <img src='./images/avatar-2.png' alt='avatar-2' className='table_avatar'/>
                      <span>Cod Fisher</span>
                    </td>
                    <td className='py-3'>99834583</td>
                    <td className='py-3'>$50.00</td>
                    <td className='py-3'>
                      <span className='delivered_status'>Delivered</span>
                    </td>
                  </tr>
                  <tr className='border_bottom'>
                    <td className='d-flex align-items-center gap-3 py-3'>
                      <img src='./images/avatar-3.png' alt='avatar-2' className='table_avatar'/>
                      <span>Savannah Nguyen</span>
                    </td>
                    <td className='py-3'>73647932</td>
                    <td className='py-3'>$500.00</td>
                    <td className='py-3'>
                      <span className='delivered_status'>Delivered</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </Col>
        <Col lg={4} sm={12}>
            <div className='p-3 common_bg h-100'>
              <h4>Customer's Feedback</h4>
              <div className='additional_bg'>
                <div className='d-flex flex-column border_bottom mt-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <img src="./images/avatar-2.png" alt="avatar-4" className='table_avatar'/>
                    <span>Jenny Wilson</span>
                  </div>
                  <div className='d-flex gap-1'>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar />
                  </div>
                  <p className='review_para'>Food is any substance consumed by an organism for nutritional support. 
                    Food is usually of plant, animal, or fungal origin and contains essential 
                    nutrients such as carbohydrates, fats, proteins, vitamins, or minerals</p>
                </div>
                <div className='d-flex flex-column border_bottom mt-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <img src="./images/avatar-3.png" alt="avatar-4" className='table_avatar'/>
                    <span>Cod Fisher</span>
                  </div>
                  <div className='d-flex gap-1'>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className='review_para'>Omnivorous humans are highly adaptable and have 
                    adapted to obtain food in many different ecosystems.</p>
                </div>
                <div className='d-flex flex-column border_bottom mt-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <img src="./images/avatar-4.png" alt="avatar-4" className='table_avatar'/>
                    <span>Jane Cooper</span>
                  </div>
                  <div className='d-flex gap-1'>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                  </div>
                  <p className='review_para'>Humans generally use cooking to prepare food for 
                    consumption. The majority of the food energy required is supplied by the 
                    industrial food industry, which produces food through intensive agriculture 
                    and distributes it through complex food processing and food distribution 
                    systems</p>
                </div>
                <div className='d-flex flex-column border_bottom mt-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <img src="./images/avatar.png" alt="avatar-4" className='table_avatar'/>
                    <span>Wade Watson</span>
                  </div>
                  <div className='d-flex gap-1'>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar/>
                    <FaStar />
                  </div>
                  <p className='review_para'>Human food can be classified in various ways, either
                    by related content or by how it is processed. The number and composition of 
                    food groups can vary.</p>
                </div>
                <div className='d-flex flex-column border_bottom mt-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <img src="./images/avatar-2.png" alt="avatar-4" className='table_avatar'/>
                    <span>Jenny Wilson</span>
                  </div>
                  <div className='d-flex gap-1'>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar />
                  </div>
                  <p className='review_para'>Food is any substance consumed by an organism for nutritional support. 
                    Food is usually of plant, animal, or fungal origin and contains essential 
                    nutrients such as carbohydrates, fats, proteins, vitamins, or minerals</p>
                </div>
                <div className='d-flex flex-column border_bottom mt-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <img src="./images/avatar-3.png" alt="avatar-4" className='table_avatar'/>
                    <span>Cod Fisher</span>
                  </div>
                  <div className='d-flex gap-1'>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className='review_para'>Omnivorous humans are highly adaptable and have 
                    adapted to obtain food in many different ecosystems.</p>
                </div>
                <div className='d-flex flex-column border_bottom mt-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <img src="./images/avatar-4.png" alt="avatar-4" className='table_avatar'/>
                    <span>Jane Cooper</span>
                  </div>
                  <div className='d-flex gap-1'>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                  </div>
                  <p className='review_para'>Humans generally use cooking to prepare food for 
                    consumption. The majority of the food energy required is supplied by the 
                    industrial food industry, which produces food through intensive agriculture 
                    and distributes it through complex food processing and food distribution 
                    systems</p>
                </div>
                <div className='d-flex flex-column border_bottom mt-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <img src="./images/avatar.png" alt="avatar-4" className='table_avatar'/>
                    <span>Wade Watson</span>
                  </div>
                  <div className='d-flex gap-1'>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar/>
                    <FaStar />
                  </div>
                  <p className='review_para'>Human food can be classified in various ways, either
                    by related content or by how it is processed. The number and composition of 
                    food groups can vary.</p>
                </div>    
                <div className='d-flex flex-column border_bottom mt-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <img src="./images/avatar-2.png" alt="avatar-4" className='table_avatar'/>
                    <span>Jenny Wilson</span>
                  </div>
                  <div className='d-flex gap-1'>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar />
                  </div>
                  <p className='review_para'>Food is any substance consumed by an organism for nutritional support. 
                    Food is usually of plant, animal, or fungal origin and contains essential 
                    nutrients such as carbohydrates, fats, proteins, vitamins, or minerals</p>
                </div>
                <div className='d-flex flex-column border_bottom mt-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <img src="./images/avatar-3.png" alt="avatar-4" className='table_avatar'/>
                    <span>Cod Fisher</span>
                  </div>
                  <div className='d-flex gap-1'>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className='review_para'>Omnivorous humans are highly adaptable and have 
                    adapted to obtain food in many different ecosystems.</p>
                </div>
                <div className='d-flex flex-column border_bottom mt-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <img src="./images/avatar-4.png" alt="avatar-4" className='table_avatar'/>
                    <span>Jane Cooper</span>
                  </div>
                  <div className='d-flex gap-1'>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                  </div>
                  <p className='review_para'>Humans generally use cooking to prepare food for 
                    consumption. The majority of the food energy required is supplied by the 
                    industrial food industry, which produces food through intensive agriculture 
                    and distributes it through complex food processing and food distribution 
                    systems</p>
                </div>
                <div className='d-flex flex-column border_bottom mt-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <img src="./images/avatar.png" alt="avatar-4" className='table_avatar'/>
                    <span>Wade Watson</span>
                  </div>
                  <div className='d-flex gap-1'>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar/>
                    <FaStar />
                  </div>
                  <p className='review_para'>Human food can be classified in various ways, either
                    by related content or by how it is processed. The number and composition of 
                    food groups can vary.</p>
                </div>
                <div className='d-flex flex-column border_bottom mt-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <img src="./images/avatar-2.png" alt="avatar-4" className='table_avatar'/>
                    <span>Jenny Wilson</span>
                  </div>
                  <div className='d-flex gap-1'>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar />
                  </div>
                  <p className='review_para'>Food is any substance consumed by an organism for nutritional support. 
                    Food is usually of plant, animal, or fungal origin and contains essential 
                    nutrients such as carbohydrates, fats, proteins, vitamins, or minerals</p>
                </div>
                <div className='d-flex flex-column border_bottom mt-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <img src="./images/avatar-3.png" alt="avatar-4" className='table_avatar'/>
                    <span>Cod Fisher</span>
                  </div>
                  <div className='d-flex gap-1'>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className='review_para'>Omnivorous humans are highly adaptable and have 
                    adapted to obtain food in many different ecosystems.</p>
                </div>
                <div className='d-flex flex-column border_bottom mt-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <img src="./images/avatar-4.png" alt="avatar-4" className='table_avatar'/>
                    <span>Jane Cooper</span>
                  </div>
                  <div className='d-flex gap-1'>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                  </div>
                  <p className='review_para'>Humans generally use cooking to prepare food for 
                    consumption. The majority of the food energy required is supplied by the 
                    industrial food industry, which produces food through intensive agriculture 
                    and distributes it through complex food processing and food distribution 
                    systems</p>
                </div>
                <div className='d-flex flex-column border_bottom mt-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <img src="./images/avatar.png" alt="avatar-4" className='table_avatar'/>
                    <span>Wade Watson</span>
                  </div>
                  <div className='d-flex gap-1'>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar className='fill_star'/>
                    <FaStar/>
                    <FaStar />
                  </div>
                  <p className='review_para'>Human food can be classified in various ways, either
                    by related content or by how it is processed. The number and composition of 
                    food groups can vary.</p>
                </div>                  
              </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

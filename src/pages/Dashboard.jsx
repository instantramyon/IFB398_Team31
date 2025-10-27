import './Dashboard.css';

function Dashboard() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const barHeights = [149, 179, 149, 137, 204, 314, 210, 254, 185, 156, 137, 22];
  
  const activities = [
    {
      icon: 'success',
      title: 'Completed data collection assessment',
      time: '2 hours ago',
      color: '#00FF1A'
    },
    {
      icon: 'warning-yellow',
      title: 'Identified unnecessary log retention',
      time: '1 day ago',
      color: '#D4D700'
    },
    {
      icon: 'document',
      title: 'Generated privacy policy template',
      time: '2 days ago',
      color: '#071BFF'
    },
    {
      icon: 'warning-red',
      title: 'Risk assessment flagged high-risk data',
      time: '3 days ago',
      color: '#D70000'
    },
    {
      icon: 'user',
      title: 'Successfully Login',
      time: '5 days ago',
      color: '#00EEFF'
    }
  ];

  return (
    <div className="dashboard-container">
      <nav className="navigation">
        <h1 className="nav-title">Data Minimisation Platform</h1>
        <div className="user-buttons">
          <button className="setting-button">
            <span className="button-text">Setting</span>
          </button>
          <button className="download-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 3V16M12 16L7 11M12 16L17 11M3 21H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="button-text">Download</span>
          </button>
        </div>
        <div className="avatar-section">
          <div className="avatar"></div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </nav>

      <div className="main-content">
        <div className="segmented-control">
          <div className="segment active">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 13H9V3H3V13ZM3 21H9V15H3V21ZM11 21H17V11H11V21ZM11 3V9H17V3H11Z" fill="black"/>
            </svg>
            <span>Dashboard</span>
          </div>
          <div className="segment">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12.9258 20.6314C15.0319 19.6781 20 16.7333 20 10.165V6.19691C20 5.07899 20 4.5192 19.7822 4.0918C19.5905 3.71547 19.2837 3.40973 18.9074 3.21799C18.4796 3 17.9203 3 16.8002 3H7.2002C6.08009 3 5.51962 3 5.0918 3.21799C4.71547 3.40973 4.40973 3.71547 4.21799 4.0918C4 4.51962 4 5.08009 4 6.2002V10.165C4 16.7333 8.9678 19.6781 11.074 20.6314C11.2972 20.7325 11.4094 20.7829 11.6621 20.8263C11.8215 20.8537 12.1795 20.8537 12.3389 20.8263C12.5907 20.7831 12.7017 20.7328 12.9235 20.6324L12.9258 20.6314Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Assessment</span>
          </div>
          <div className="segment">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.6657 13.6987 21.1298 13.3564 21.4721C13.0141 21.8144 12.55 22.0065 12.0664 22.0065C11.5827 22.0065 11.1186 21.8144 10.7763 21.4721C10.434 21.1298 10.2418 20.6657 10.2418 20.1818V20.1C10.2355 19.7991 10.1395 19.5073 9.96485 19.2625C9.79021 19.0176 9.54447 18.8309 9.26 18.7273C8.98585 18.6063 8.68168 18.5702 8.38677 18.6236C8.09186 18.6771 7.81971 18.8177 7.60545 19.0273L7.55091 19.0818C7.38202 19.2509 7.18149 19.385 6.96076 19.4765C6.74003 19.568 6.50346 19.6151 6.26455 19.6151C6.02563 19.6151 5.78906 19.568 5.56833 19.4765C5.3476 19.385 5.14707 19.2509 4.97818 19.0818C4.80919 18.913 4.67508 18.7124 4.5836 18.4917C4.49212 18.271 4.44502 18.0344 4.44502 17.7955C4.44502 17.5565 4.49212 17.3199 4.5836 17.0992C4.67508 16.8785 4.80919 16.678 4.97818 16.5091L5.03273 16.4545C5.24228 16.2403 5.38289 15.9682 5.43638 15.6733C5.48988 15.3784 5.45374 15.0742 5.33273 14.8C5.21737 14.5311 5.02609 14.3018 4.78221 14.1403C4.53833 13.9788 4.25251 13.8921 3.96 13.8909H3.80545C3.32158 13.8909 2.85745 13.6987 2.51517 13.3564C2.17289 13.0141 1.98077 12.55 1.98077 12.0664C1.98077 11.5827 2.17289 11.1186 2.51517 10.7763C2.85745 10.434 3.32158 10.2418 3.80545 10.2418H3.88636C4.18728 10.2355 4.47905 10.1395 4.7239 9.96485C4.96875 9.79021 5.15549 9.54447 5.25909 9.26C5.38011 8.98585 5.41625 8.68168 5.36275 8.38677C5.30926 8.09186 5.16865 7.81971 4.95909 7.60545L4.90455 7.55091C4.73556 7.38202 4.60144 7.18149 4.50996 6.96076C4.41848 6.74003 4.37138 6.50346 4.37138 6.26455C4.37138 6.02563 4.41848 5.78906 4.50996 5.56833C4.60144 5.3476 4.73556 5.14707 4.90455 4.97818C5.07343 4.80919 5.27396 4.67508 5.49469 4.5836C5.71542 4.49212 5.95199 4.44502 6.19091 4.44502C6.42982 4.44502 6.66639 4.49212 6.88712 4.5836C7.10785 4.67508 7.30838 4.80919 7.47727 4.97818L7.53182 5.03273C7.74607 5.24228 8.01823 5.38289 8.31314 5.43638C8.60805 5.48988 8.91221 5.45374 9.18636 5.33273H9.26C9.52889 5.21737 9.75822 5.02609 9.91971 4.78221C10.0812 4.53833 10.1679 4.25251 10.1691 3.96V3.80545C10.1691 3.32158 10.3612 2.85745 10.7035 2.51517C11.0458 2.17289 11.5099 1.98077 11.9936 1.98077C12.4773 1.98077 12.9414 2.17289 13.2837 2.51517C13.626 2.85745 13.8182 3.32158 13.8182 3.80545V3.88636C13.8194 4.17888 13.9061 4.46469 14.0676 4.70857C14.2291 4.95245 14.4584 5.14373 14.7273 5.25909C15.0014 5.38011 15.3056 5.41625 15.6005 5.36275C15.8954 5.30926 16.1676 5.16865 16.3818 4.95909L16.4364 4.90455C16.6052 4.73556 16.8058 4.60144 17.0265 4.50996C17.2472 4.41848 17.4838 4.37138 17.7227 4.37138C17.9617 4.37138 18.1982 4.41848 18.419 4.50996C18.6397 4.60144 18.8402 4.73556 19.0091 4.90455C19.1781 5.07343 19.3122 5.27396 19.4037 5.49469C19.4952 5.71542 19.5423 5.95199 19.5423 6.19091C19.5423 6.42982 19.4952 6.66639 19.4037 6.88712C19.3122 7.10785 19.1781 7.30838 19.0091 7.47727L18.9545 7.53182C18.745 7.74607 18.6044 8.01823 18.5509 8.31314C18.4974 8.60805 18.5335 8.91221 18.6545 9.18636V9.26C18.7698 9.52889 18.9611 9.75822 19.205 9.91971C19.4489 10.0812 19.7347 10.1679 20.0273 10.1691H20.1818C20.6657 10.1691 21.1298 10.3612 21.4721 10.7035C21.8144 11.0458 22.0065 11.5099 22.0065 11.9936C22.0065 12.4773 21.8144 12.9414 21.4721 13.2837C21.1298 13.626 20.6657 13.8182 20.1818 13.8182H20.1C19.8075 13.8194 19.5217 13.9061 19.2778 14.0676C19.0339 14.2291 18.8426 14.4584 18.7273 14.7273Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Data Practices</span>
          </div>
          <div className="segment">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 17H15M9 14H15M13.0004 3.00087C12.9048 3 12.7974 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20302 18.9999 9.09553 18.999 9M13.0004 3.00087C13.2858 3.00348 13.4657 3.01407 13.6382 3.05547C13.8423 3.10446 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59181 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53379 18.9964 8.71454 18.999 9M13.0004 3.00087L13 5.80021C13 6.92031 13 7.48015 13.218 7.90797C13.4097 8.2843 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.999" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Policy Template</span>
          </div>
          <div className="segment">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Risk Analysis</span>
          </div>
        </div>

        <div className="search-bar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.9999 21.0004L16.6499 16.6504" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input type="text" placeholder="Search..." />
        </div>

        <div className="stats-cards">
          <div className="stat-card">
            <div className="stat-header">
              <h3>Data Sources</h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 12V17C18 18.6569 15.3137 20 12 20C8.68629 20 6 18.6569 6 17V12M18 12V7M18 12C18 13.6569 15.3137 15 12 15C8.68629 15 6 13.6569 6 12M18 7C18 5.34315 15.3137 4 12 4C8.68629 4 6 5.34315 6 7M18 7C18 8.65685 15.3137 10 12 10C8.68629 10 6 8.65685 6 7M6 12V7" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-value">45</div>
            <div className="stat-description">Across all systems</div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <h3>Minimisation Opportunities</h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.0005 17L14.1543 11.0625C14.0493 10.9559 13.9962 10.9024 13.9492 10.8604C13.1899 10.1807 12.0416 10.1807 11.2822 10.8604C11.2352 10.9024 11.1817 10.9558 11.0767 11.0625C10.9716 11.1692 10.9191 11.2226 10.8721 11.2646C10.1127 11.9443 8.96397 11.9443 8.20461 11.2646C8.15759 11.2226 8.10506 11.1692 8 11.0625L4 7M20.0005 17L20 11M20.0005 17H14" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-value">16</div>
            <div className="stat-description">Potential reductions identified</div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <h3>Risk Score</h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 9L11 13L9 11M20 10.165C20 16.7333 15.0319 19.6781 12.9258 20.6314L12.9231 20.6325C12.7016 20.7328 12.5906 20.7831 12.3389 20.8263C12.1795 20.8537 11.8215 20.8537 11.6621 20.8263C11.4094 20.7829 11.2972 20.7325 11.074 20.6314C8.9678 19.6781 4 16.7333 4 10.165V6.2002C4 5.08009 4 4.51962 4.21799 4.0918C4.40973 3.71547 4.71547 3.40973 5.0918 3.21799C5.51962 3 6.08009 3 7.2002 3H16.8002C17.9203 3 18.4796 3 18.9074 3.21799C19.2837 3.40973 19.5905 3.71547 19.7822 4.0918C20 4.5192 20 5.07899 20 6.19691V10.165Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-value">65 / 100</div>
            <div className="stat-description">Overall Privacy Risk Level</div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <h3>Pending Action</h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.9238 9.00006V13.0001M4.30273 15.1999C3.3933 16.775 2.93871 17.5629 3.00664 18.2092C3.06589 18.7729 3.36175 19.2851 3.82031 19.6182C4.34586 20.0001 5.25473 20.0001 7.07236 20.0001H16.7753C18.5929 20.0001 19.5017 20.0001 20.0272 19.6182C20.4858 19.2851 20.7818 18.7729 20.841 18.2092C20.9089 17.5629 20.4545 16.775 19.5451 15.1999L14.6953 6.79986C13.7859 5.22468 13.331 4.43722 12.7373 4.17291C12.2195 3.94236 11.6278 3.94236 11.11 4.17291C10.5166 4.43711 10.062 5.22458 9.15329 6.79845L4.30273 15.1999ZM11.9746 16.0001V16.1001L11.874 16.1003V16.0001H11.9746Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-value">12</div>
            <div className="stat-description">Recommendations to implement</div>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="chart-card line-chart-card">
            <h3 className="chart-title">Overall risk based on volume of data</h3>
            <div className="chart-container">
              <div className="y-axis">
                <span>50,000</span>
                <span>45,000</span>
                <span>40,000</span>
                <span>35,000</span>
                <span>30,000</span>
                <span>25,000</span>
              </div>
              <div className="chart-area">
                <svg className="grid-lines" viewBox="0 0 685 330" preserveAspectRatio="none">
                  <path d="M0 0.5H685" stroke="#E6E6E6"/>
                  <path d="M0 55.3333H685" stroke="#E6E6E6"/>
                  <path d="M0 110.167H685" stroke="#E6E6E6"/>
                  <path d="M0 165H685" stroke="#E6E6E6"/>
                  <path d="M0 219.833H685" stroke="#E6E6E6"/>
                  <path d="M0 274.667H685" stroke="#E6E6E6"/>
                  <path d="M0 329.5H685" stroke="#E6E6E6"/>
                </svg>
                <svg className="line-graph" viewBox="0 0 643 289" preserveAspectRatio="none">
                  <path d="M640.058 2.00051L598.763 97.4154C598.301 98.4808 597.033 98.9311 596.004 98.3951L558.897 79.0785C557.943 78.582 556.767 78.9285 556.235 79.863L522.081 139.853C521.471 140.924 520.048 141.194 519.088 140.421L478.404 107.655C477.624 107.027 476.5 107.072 475.774 107.761L414.639 165.721C414.149 166.185 413.459 166.371 412.803 166.216L386.561 160.008C386.079 159.894 385.572 159.963 385.138 160.202L252.117 233.297C251.616 233.572 251.021 233.62 250.482 233.428L219.827 222.49C219.285 222.297 218.687 222.346 218.184 222.625L121.853 276.117C121.62 276.246 121.364 276.328 121.099 276.357L25.5 286.813L2 286.813" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                </svg>
                <div className="line-graph-dot"></div>
                <div className="line-graph-glow"></div>
              </div>
            </div>
          </div>

          <div className="activity-list-card">
            <h3 className="card-title">Data Minimisation Steps</h3>
            <p className="card-subtitle">Latest actions and system updates</p>
            <div className="activity-list">
              {activities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-icon" style={{color: activity.color}}>
                    {activity.icon === 'success' && (
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M28 21.3333L22.6667 26.6667L20 24M24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24C36 30.6274 30.6274 36 24 36Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {activity.icon === 'warning-yellow' && (
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M24 19.8751V25.375M13.7518 28.3998C12.5289 30.5656 11.9176 31.649 12.0089 32.5376C12.0886 33.3127 12.4864 34.0169 13.1031 34.475C13.8098 35 15.032 35 17.4762 35H30.5238C32.968 35 34.19 35 34.8967 34.475C35.5134 34.0169 35.9114 33.3127 35.9911 32.5376C36.0824 31.649 35.4713 30.5656 34.2484 28.3998L27.7269 16.8498C26.5039 14.6839 25.8922 13.6012 25.0939 13.2377C24.3976 12.9208 23.602 12.9208 22.9057 13.2377C22.1077 13.601 21.4963 14.6838 20.2744 16.8479L13.7518 28.3998ZM24.0683 29.5V29.6375L23.933 29.6378V29.5H24.0683Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {activity.icon === 'document' && (
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M20.1429 30.1111H27.8571M20.1429 26.4444H27.8571M25.2862 13.0011C25.1634 13 25.0252 13 24.8675 13H19.1145C17.6744 13 16.9538 13 16.4037 13.2664C15.9199 13.5008 15.5268 13.8745 15.2803 14.3344C15 14.8573 15 15.5423 15 16.9113V31.0891C15 32.4581 15 33.1423 15.2803 33.6652C15.5268 34.1251 15.9199 34.4995 16.4037 34.7338C16.9533 35 17.673 35 19.1103 35L28.8897 35C30.327 35 31.0457 35 31.5952 34.7338C32.0791 34.4995 32.4735 34.1251 32.72 33.6652C33 33.1428 33 32.4596 33 31.0933V20.7314C33 20.5815 32.9999 20.4501 32.9987 20.3333M25.2862 13.0011C25.6532 13.0042 25.8845 13.0172 26.1062 13.0678C26.3686 13.1277 26.6201 13.2264 26.8502 13.3605C27.1096 13.5116 27.3323 13.7233 27.7768 14.1458L31.7953 17.9659C32.24 18.3886 32.4611 18.5994 32.6201 18.8461C32.7611 19.0648 32.8654 19.3033 32.9284 19.5527C32.9817 19.7635 32.9954 19.9844 32.9987 20.3333M25.2862 13.0011L25.2857 16.4225C25.2857 17.7915 25.2857 18.4757 25.566 18.9986C25.8125 19.4586 26.2056 19.8328 26.6895 20.0672C27.239 20.3333 27.9587 20.3333 29.396 20.3333H32.9987" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {activity.icon === 'warning-red' && (
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M24 19.8751V25.375M13.7518 28.3998C12.5289 30.5656 11.9176 31.649 12.0089 32.5376C12.0886 33.3127 12.4864 34.0169 13.1031 34.475C13.8098 35 15.032 35 17.4762 35H30.5238C32.968 35 34.19 35 34.8967 34.475C35.5134 34.0169 35.9114 33.3127 35.9911 32.5376C36.0824 31.649 35.4713 30.5656 34.2484 28.3998L27.7269 16.8498C26.5039 14.6839 25.8922 13.6012 25.0939 13.2377C24.3976 12.9208 23.602 12.9208 22.9057 13.2377C22.1077 13.601 21.4963 14.6838 20.2744 16.8479L13.7518 28.3998ZM24.0683 29.5V29.6375L23.933 29.6378V29.5H24.0683Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {activity.icon === 'user' && (
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M31 33C31 30.349 27.4183 28.2 23 28.2C18.5817 28.2 15 30.349 15 33M39 22.2L33.6667 27L31 24.6M23 24.6C20.0545 24.6 17.6667 22.451 17.6667 19.8C17.6667 17.149 20.0545 15 23 15C25.9455 15 28.3333 17.149 28.3333 19.8C28.3333 22.451 25.9455 24.6 23 24.6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <div className="activity-content">
                    <div className="activity-title">{activity.title}</div>
                    <div className="activity-time">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="chart-card bar-chart-card">
            <h3 className="chart-title">Amount of Data Stored</h3>
            <div className="chart-container">
              <div className="y-axis">
                <span>80,000</span>
                <span>70,000</span>
                <span>60,000</span>
                <span>50,000</span>
                <span>40,000</span>
                <span>30,000</span>
              </div>
              <div className="chart-area">
                <svg className="grid-lines" viewBox="0 0 685 330" preserveAspectRatio="none">
                  <path d="M0 0.5H685" stroke="#E6E6E6"/>
                  <path d="M0 55.3333H685" stroke="#E6E6E6"/>
                  <path d="M0 110.167H685" stroke="#E6E6E6"/>
                  <path d="M0 165H685" stroke="#E6E6E6"/>
                  <path d="M0 219.833H685" stroke="#E6E6E6"/>
                  <path d="M0 274.667H685" stroke="#E6E6E6"/>
                  <path d="M0 329.5H685" stroke="#E6E6E6"/>
                </svg>
                <div className="bar-list">
                  {barHeights.map((height, index) => (
                    <div key={index} className="bar" style={{height: `${height}px`}}></div>
                  ))}
                </div>
              </div>
              <div className="x-axis">
                {months.map((month, index) => (
                  <span key={index}>{month}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="quick-actions-card">
            <h2 className="card-title">Quick Actions</h2>
            <p className="card-subtitle">Latest actions and system updates</p>
            <div className="quick-actions-grid">
              <button className="action-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12.9258 20.6314C15.0319 19.6781 20 16.7333 20 10.165V6.19691C20 5.07899 20 4.5192 19.7822 4.0918C19.5905 3.71547 19.2837 3.40973 18.9074 3.21799C18.4796 3 17.9203 3 16.8002 3H7.2002C6.08009 3 5.51962 3 5.0918 3.21799C4.71547 3.40973 4.40973 3.71547 4.21799 4.0918C4 4.51962 4 5.08009 4 6.2002V10.165C4 16.7333 8.9678 19.6781 11.074 20.6314C11.2972 20.7325 11.4094 20.7829 11.6621 20.8263C11.8215 20.8537 12.1795 20.8537 12.3389 20.8263C12.5907 20.7831 12.7017 20.7328 12.9235 20.6324L12.9258 20.6314Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Start Assessment</span>
              </button>
              <button className="action-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 17H15M9 14H15M13.0004 3.00087C12.9048 3 12.7974 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20302 18.9999 9.09553 18.999 9M13.0004 3.00087C13.2858 3.00348 13.4657 3.01407 13.6382 3.05547C13.8423 3.10446 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59181 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53379 18.9964 8.71454 18.999 9M13.0004 3.00087L13 5.80021C13 6.92031 13 7.48015 13.218 7.90797C13.4097 8.2843 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.999" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Generate Policy</span>
              </button>
              <button className="action-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 12V17C18 18.6569 15.3137 20 12 20C8.68629 20 6 18.6569 6 17V12M18 12V7M18 12C18 13.6569 15.3137 15 12 15C8.68629 15 6 13.6569 6 12M18 7C18 5.34315 15.3137 4 12 4C8.68629 4 6 5.34315 6 7M18 7C18 8.65685 15.3137 10 12 10C8.68629 10 6 8.65685 6 7M6 12V7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Audit Data</span>
              </button>
              <button className="action-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20.0005 17L14.1543 11.0625C14.0493 10.9559 13.9962 10.9024 13.9492 10.8604C13.1899 10.1807 12.0416 10.1807 11.2822 10.8604C11.2352 10.9024 11.1817 10.9558 11.0767 11.0625C10.9716 11.1692 10.9191 11.2226 10.8721 11.2646C10.1127 11.9443 8.96397 11.9443 8.20461 11.2646C8.15759 11.2226 8.10506 11.1692 8 11.0625L4 7M20.0005 17L20 11M20.0005 17H14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>View Recommendations</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

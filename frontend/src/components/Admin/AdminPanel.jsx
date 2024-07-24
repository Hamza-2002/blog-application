import React, { useState } from 'react'
import ReactHelemet from '../ReactHelemet'
import admin_image from '../../images/admin.png'
import AdminUser from './AdminUser'
import AdminBlog from './AdminBlog'
import AdminCharts from './AdminCharts'
import AdminDashBoard from './AdminDashBoard'
import AdminComments from './AdminComments'
const AdminPanel = () => {
    const [selectedContent , SetSelectedContent] = useState("User");

    const handleLinkClick = (contentName) => {
      SetSelectedContent(contentName);
      };

  let content;
  if (selectedContent === 'Dashboard') {
    content = <AdminDashBoard />;
  } else if (selectedContent === 'User') {
    content = <AdminUser />;
  } else if (selectedContent === 'Blogs') {
    content = <AdminBlog />;
  } else if (selectedContent === 'Comments') {
    content = <AdminComments />;
  }else if (selectedContent === 'Charts') {
    content = <AdminCharts />;
  }
    return (
        <>
            <ReactHelemet title={"admin"} image={admin_image} />

            <div className="flex ">

                <div className="left">
                    <div className="drawer lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-blue-950 text-white">
                                {/* Sidebar content here */}
                                <li onClick={() => handleLinkClick('Dashboard')}><a>Dashboard</a></li>
                                <li onClick={() => handleLinkClick('User')}><a>Users</a></li>
                                <li onClick={() => handleLinkClick('Blogs')}><a>Blogs</a></li>
                                <li onClick={() => handleLinkClick('Comments')}><a>Comments</a></li>
                                <li onClick={() => handleLinkClick('Charts')}><a>Charts</a></li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="right ">
                  
                  {content}
                </div>
            </div>
        </>
    )
}

export default AdminPanel
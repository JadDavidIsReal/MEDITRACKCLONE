import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { 
    Bell, 
    User, 
    LayoutDashboard,
    Archive,
    FileText,
    History,
    ShieldQuestion,
    Search,
    Printer,
    GraduationCap,
    Briefcase,
    Users,
    ChevronDown,
    Menu // Added for the toggle button
} from 'lucide-react';

const Reports: React.FC = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [isInventoryOpen, setInventoryOpen] = useState(false);

    const handleNavigation = (path: string): void => {
        navigate(path);
    };

    const handleLogout = (): void => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    // Sample data for the report table
    const reportData = [
        { id: 1, name: 'RITEMED Paracetamol 500mg', category: 'Pain Reliever', stock: 150, status: 'High' },
        { id: 2, name: 'DECOLGEN Forte', category: 'Cold & Flu', stock: 45, status: 'Low' },
        { id: 3, name: 'Cetirizine (Allerkid)', category: 'Allergies', stock: 80, status: 'Medium' },
        { id: 4, name: 'Amoxicillin 250mg', category: 'Antibiotic', stock: 0, status: 'Out of Stock' },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-[#3D1528] to-[#A3386C] text-white z-20 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
                {/* Profile */}
                <div className="p-6 mt-4 border-b border-white/50">
                    <div className="flex flex-col items-center mb-2">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-[#A3386C]" />
                        </div>
                        <div className={`flex flex-col items-center transition-opacity duration-200 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="text-[20px] font-semibold">John Doe</p>
                            <p className="text-sm">Nurse</p>
                        </div>
                    </div>
                     <p className={`text-center text-xs transition-opacity duration-200 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Fr Selga, Davao City</p>
                </div>

                {/* Navigation */}
                <nav className="mt-8">
                    <div className="px-4 space-y-2">
                        {/* Dashboard */}
                        <div className="flex items-center px-4 py-3 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/')}>
                            <LayoutDashboard className="w-5 h-5 text-white flex-shrink-0" />
                            {isSidebarOpen && <p className="text-sm font-medium text-white ml-3 whitespace-nowrap">Dashboard</p>}
                        </div>

                        {/* Search Submenu */}
                        <div>
                            <div className="flex items-center px-4 py-3 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => setSearchOpen(!isSearchOpen)}>
                                <Search className="w-5 h-5 text-white flex-shrink-0" />
                                {isSidebarOpen && (
                                    <div className="flex justify-between w-full items-center">
                                        <p className="text-sm text-white ml-3 whitespace-nowrap">Search</p>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSearchOpen ? 'rotate-180' : ''}`} />
                                    </div>
                                )}
                            </div>
                            {isSidebarOpen && isSearchOpen && (
                                <div className="mt-1 space-y-1 pl-8">
                                    <div className="flex items-center p-2 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/search/student')}>
                                        <GraduationCap className="w-5 h-5 text-white flex-shrink-0" />
                                        <p className="text-sm text-white ml-3 whitespace-nowrap">Student</p>
                                    </div>
                                    <div className="flex items-center p-2 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/search/employee')}>
                                        <Briefcase className="w-5 h-5 text-white flex-shrink-0" />
                                        <p className="text-sm text-white ml-3 whitespace-nowrap">Employee</p>
                                    </div>
                                    <div className="flex items-center p-2 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/search/community')}>
                                        <Users className="w-5 h-5 text-white flex-shrink-0" />
                                        <p className="text-sm text-white ml-3 whitespace-nowrap">Community</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Inventory Submenu */}
                        <div>
                            <div className="flex items-center px-4 py-3 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => setInventoryOpen(!isInventoryOpen)}>
                                <Archive className="w-5 h-5 text-white flex-shrink-0" />
                                {isSidebarOpen && (
                                    <div className="flex justify-between w-full items-center">
                                        <p className="text-sm text-white ml-3 whitespace-nowrap">Inventory</p>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isInventoryOpen ? 'rotate-180' : ''}`} />
                                    </div>
                                )}
                            </div>
                             {isSidebarOpen && isInventoryOpen && (
                                <div className="mt-1 space-y-1 pl-8">
                                     <div className="flex items-center p-2 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/inventory/dashboard')}>
                                        <LayoutDashboard className="w-5 h-5 text-white flex-shrink-0" />
                                        <p className="text-sm text-white ml-3 whitespace-nowrap">Dashboard</p>
                                    </div>
                                    <div className="flex items-center p-2 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/inventory/stocks')}>
                                        <Archive className="w-5 h-5 text-white flex-shrink-0" />
                                        <p className="text-sm text-white ml-3 whitespace-nowrap">Stocks</p>
                                    </div>
                                    <div className="flex items-center p-2 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/inventory/history')}>
                                        <History className="w-5 h-5 text-white flex-shrink-0" />
                                        <p className="text-sm text-white ml-3 whitespace-nowrap">History</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Reports -- ACTIVE LINK */}
                        <div className="flex items-center px-4 py-3 bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/Reports')}>
                            <FileText className="w-5 h-5 text-white flex-shrink-0" />
                            {isSidebarOpen && <p className="text-sm text-white ml-3 whitespace-nowrap">Reports</p>}
                        </div>

                        {/* Print */}
                        <div className="flex items-center px-4 py-3 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/Print')}>
                            <Printer className="w-5 h-5 text-white flex-shrink-0" />
                            {isSidebarOpen && <p className="text-sm text-white ml-3 whitespace-nowrap">Print</p>}
                        </div>

                        {/* About */}
                        <div className="flex items-center px-4 py-3 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/About')}>
                            <ShieldQuestion className="w-5 h-5 text-white flex-shrink-0" />
                            {isSidebarOpen && <p className="text-sm text-white ml-3 whitespace-nowrap">About</p>}
                        </div>
                    </div>
                </nav>

                {/* Logout */}
                <div className="absolute bottom-6 left-0 right-0 px-4">
                    <div className={`flex items-center p-3 hover:bg-[#77536A] rounded-lg cursor-pointer ${!isSidebarOpen && 'justify-center'}`} onClick={handleLogout}>
                        <div className="w-5 h-5 flex-shrink-0">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M16 13v-2H7V8l-5 4 5 4v-3z"/>
                                <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"/>
                            </svg>
                        </div>
                        {isSidebarOpen && <p className="text-sm ml-3 whitespace-nowrap">Logout</p>}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
                {/* Header */}
                <header className="bg-gradient-to-b from-[#3D1528] to-[#A3386C] shadow-sm border-b border-gray-200 px-7 py-3 z-10">
                    <div className="flex items-center justify-between">
                        {/* Sidebar Toggle Button */}
                        <button onClick={toggleSidebar} className="text-white p-2 rounded-full hover:bg-white/20">
                            <Menu className="w-6 h-6" />
                        </button>
                        
                        <div className="flex items-center">
                            <img src="Logo.png" alt="UIC Logo" className="w-15 h-15 mr-2"/>
                            <h1 className="text-white text-[28px] font-semibold">MEDITRACK</h1>
                        </div>

                        <div className="flex items-center">
                            <Bell className="w-6 h-6 text-white cursor-pointer" />
                        </div>
                    </div>
                </header>

                {/* Main Reports Container */}
                <main className="flex-1 p-6 overflow-y-auto bg-white">
                    <div className="mb-6">
                        <h2 className="text-3xl font-normal text-black">Generate Reports</h2>
                        <p className="text-gray-500">Select criteria to generate and view reports.</p>
                    </div>

                    {/* Report Generation Form */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                            {/* Report Type */}
                            <div>
                                <label htmlFor="reportType" className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
                                <select id="reportType" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#A3386C] focus:border-[#A3386C]">
                                    <option>Inventory Summary</option>
                                    <option>Dispensing History</option>
                                    <option>Expiration Report</option>
                                    <option>Low Stock Report</option>
                                </select>
                            </div>
                            
                            {/* Start Date */}
                            <div>
                                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                                <input type="date" id="startDate" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#A3386C] focus:border-[#A3386C]" />
                            </div>

                            {/* End Date */}
                            <div>
                                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                                <input type="date" id="endDate" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#A3386C] focus:border-[#A3386C]" />
                            </div>

                            {/* Generate Button */}
                            <button className="bg-[#A3386C] text-white px-4 py-2 rounded-md hover:bg-[#862d59] transition-colors h-fit">
                                Generate Report
                            </button>
                        </div>
                    </div>

                    {/* Generated Report Display */}
                    <div>
                        <h3 className="text-2xl font-normal text-black mb-4">Inventory Summary Report</h3>
                        <div className="overflow-x-auto border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medicine Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Stock</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {reportData.map((item) => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.stock}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    item.status === 'High' ? 'bg-green-100 text-green-800' :
                                                    item.status === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                                    item.status === 'Low' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Reports;
import { useState } from 'react';
import Header from '../../ui-components/header'
import { Grid, TableContainer, Table, TableHead, TableRow, TableCell, Typography, TableBody, Container, TablePagination } from '@mui/material'
import Footer from "../../ui-components/footer"
import Slider from '../home/slider'
import NameSlider from '../../ui-components/nameSlider'

const columns = [
    { id: '#', label: '#', minWidth: 100 },
    { id: 'job', label: 'Job', minWidth: 100 },
    { id: 'task', label: 'Task', minWidth: 100 },
    { id: 'requirment', label: 'Requiremnt', minWidth: 100 },
];

const data = [
    { name: 'CEO', task: 'Strategic direction and oversight', requirment: 'Business Acumen, Leadership and vision' },
    { name: 'CFO', task: 'Financial strategy and management', requirment: 'Cost Management and Efficiency' },
    { name: 'CMO', task: 'Marketing strategy and execution', requirment: 'Digital Marketing Expertise' },
    { name: 'COD', task: 'Operational management and Effect', requirment: 'Events and seasonal Content' },
    { name: 'General Manager', task: 'Operational oversight and leadership', requirment: 'Managerial Experience' },
    { name: 'All Director', task: 'Guide strategy, oversee departments, ensure goals, compliance, and operational success', requirment: 'Visionary Thinking, Leadership and Management' },
    { name: 'General Manager', task: 'Develop, execute, and analyze campaigns', requirment: 'Marketing Skills, Analytical abilities' },
    { name: 'Marketing Manager', task: 'Manage brand identity effectively', requirment: 'Brand management skills' },
    { name: 'Brand Manager', task: 'Lead, coach, and drive sales', requirment: 'Communication skills, Experience in sales ' },
    { name: 'Sales Manager', task: 'Build  relationships, meet targets', requirment: 'Sales techniques' },
    { name: 'Sales Representative', task: 'Co Innovate, create, refine products', requirment: 'Collaboration skills' },
    { name: 'Product Development Manager', task: 'Design, develop, optimize formulations', requirment: 'Compatibility testing' },
    { name: 'Formulations Chemist', task: 'Oversee operations, ensure efficiency', requirment: 'Smooth operations' },
    { name: 'Operations Manager', task: 'Manage production, ensure efficiency', requirment: 'Managing production' },
    { name: 'Manufacturing Manager', task: 'Lead research, drive innovation', requirment: 'Project Management Skills' },
    { name: 'R&D Manager', task: 'Conduct research, analyze findings', requirment: 'Expertise in cosmetic chemistry' },
    { name: 'Research Scientist', task: 'Resolve customer issues promptly', requirment: 'Communication skills, Customer inquiries and concerns' },
    { name: 'Customer Service Manager', task: 'Coordinate orders, ensure delivery', requirment: 'Experience with inventory management' },
    { name: 'Order Fulfillment- Return & Exchange Coordinator', task: 'Managing budgets', requirment: 'Budgeting and forecasting' },
    { name: 'Finance Manager', task: 'Operational oversight and leadership', requirment: 'Managerial Experience' },
    { name: 'Accountant', task: 'Compile and analyze financial statements', requirment: 'Strong analytical skills' },
    { name: 'HR Manager', task: 'Recruitment and selection', requirment: 'Recruitment and talent management' },
    { name: 'Training & Development Coordinator', task: 'Identifying and planning training programs for business', requirment: 'Interpersonal skills' },
]

const FinancialStatment = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event?.target?.value);
        setPage(0);
    };

    return (
        <>
            <Header />
            {/* <NameSlider name="Job Details"/> */}
            <Grid>
                <Container>
                    <Typography variant='h3' sx={{ textAlign: 'center', color: "#553a20", fontWeight: '600', mt: 4,  fontSize: {md: '40px', xs: '28px'} }}>Income Statement</Typography>
                    <TableContainer sx={{ mt: 2 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        sx={{ py: 3, textAlign: 'center', fontWeight: '900 !important' }}
                                        // align={column.align}
                                        style={{ minWidth: 100 }}
                                    >
                                        #
                                    </TableCell>
                                    <TableCell
                                        sx={{ py: 3, textAlign: 'center', fontWeight: '900 !important' }}
                                        // align={column.align}
                                        style={{ minWidth: 100 }}
                                    >
                                        Details
                                    </TableCell>
                                    <TableCell
                                        sx={{ py: 3, textAlign: 'center', fontWeight: '900 !important' }}
                                        // align={column.align}
                                        style={{ minWidth: 100 }}
                                    >
                                        Amount(Rs)
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow sx={{ py: 3 }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>1</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Sales</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>1200,000</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ py: 3, borderTop: "2px solid black", borderBottom: "2px solid black" }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography sx={{ fontWeight: 600 }}></Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{ fontWeight: 600 }}>Total</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{ fontWeight: 600 }}>1200,000</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow sx={{ py: 3 }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography sx={{ fontWeight: 600 }}></Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{ fontWeight: 600 }}>Expenses</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography sx={{ fontWeight: 600 }}>1200,000</Typography> */}
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ py: 3 }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>1</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Cost of good sold</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>600,000</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ py: 3 }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>2</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Salaries & Wages</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>200,000</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ py: 3 }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>3</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Rent</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>100,000</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ py: 3 }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>4</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Utilities</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>20,000</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ py: 3 }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>5</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Marketing & Advertising</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>50,000</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ py: 3 }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>6</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Other Operating Expenses</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>50,000</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow sx={{ py: 3, borderTop: "2px solid black", borderBottom: "2px solid black"}} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography sx={{ fontWeight: 600 }}></Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{ fontWeight: 600 }}>Total Expenses</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{ fontWeight: 600 }}>1020,000</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow sx={{ py: 3, borderTop: "2px solid black", borderBottom: "2px solid black" }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography sx={{ fontWeight: 600 }}></Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{ fontWeight: 600 }}>Net Income</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{ fontWeight: 600 }}>180,000</Typography>
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                        {/* <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        /> */}
                    </TableContainer>
                </Container>

                <Container sx={{mt: 10}}>
                    <Typography variant='h3' sx={{ textAlign: 'center', color: "#553a20", fontWeight: '600', mt: 4,  fontSize: {md: '40px', xs: '28px'} }}>Balance Sheet</Typography>
                    <TableContainer sx={{ mt: 2 }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{borderBottom: '2px solid black'}}>
                                    <TableCell
                                        sx={{ py: 3, textAlign: 'center', fontWeight: '900 !important' }}
                                        // align={column.align}
                                        style={{ minWidth: 100 }}
                                    >
                                        #
                                    </TableCell>
                                    <TableCell
                                        sx={{ py: 3, textAlign: 'center', fontWeight: '900 !important' }}
                                        // align={column.align}
                                        style={{ minWidth: 100 }}
                                    >
                                        Assets
                                    </TableCell>
                                    <TableCell
                                        sx={{ py: 3, textAlign: 'center', fontWeight: '900 !important' }}
                                        // align={column.align}
                                        style={{ minWidth: 100 }}
                                    >
                                        Amount(Rs)
                                    </TableCell>
                                    <TableCell
                                        sx={{ py: 3, textAlign: 'center', fontWeight: '900 !important' }}
                                        // align={column.align}
                                        style={{ minWidth: 100 }}
                                    >
                                        Lialbilities
                                    </TableCell>
                                    <TableCell
                                        sx={{ py: 3, textAlign: 'center', fontWeight: '900 !important' }}
                                        // align={column.align}
                                        style={{ minWidth: 100 }}
                                    >
                                         Amount(Rs)
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow sx={{ py: 3 }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography>1</Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>Current Assets</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography>1200,000</Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>Current Lialbilities</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow sx={{ py: 3 }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>1</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Cash</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>100,000</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Account Payables</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>150,000</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow sx={{ py: 3 }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>2</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Account Receivable</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>200,000</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Short Term Loan</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>100,000</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow sx={{ py: 3 }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>3</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Inventory</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>300,000</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Payables Expenses</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>50,000</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow sx={{ py: 3, borderBottom: '2px solid black'}} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>4</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Prepaid Expenses</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>50,000</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography>Payables Expenses</Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography>50,000</Typography> */}
                                    </TableCell>
                                </TableRow>

                                {/* <TableRow sx={{ py: 3, borderTop: "2px solid black", borderBottom: "2px solid black"}} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                     
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>Total</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>650,000</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>Total</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>300,000</Typography>
                                    </TableCell>
                                </TableRow> */}

                                <TableRow sx={{ py: 3 }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography>1</Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>Fixed Assets</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography>1200,000</Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>Long Term Lialbilities</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow sx={{ py: 3 }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>1</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Equipment</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>300,000</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Long Term Loan</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>200,000</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow sx={{ py: 3, borderBottom: '2px solid black' }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>2</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>Furniture</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>50,000</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography>Payables Expenses</Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography>50,000</Typography> */}
                                    </TableCell>
                                </TableRow>

                                {/* <TableRow sx={{ py: 3, borderTop: "2px solid black" }} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>Total</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>350,000</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>Total</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>200,000</Typography>
                                    </TableCell>
                                </TableRow> */}

                                {/* <TableRow sx={{ py: 3, borderTop: "2px solid black", borderBottom: "2px solid black"}} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                     
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                      
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                       
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>Total</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>500,000</Typography>
                                    </TableCell>
                                </TableRow> */}

                                <TableRow sx={{ py: 3}} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography>1</Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography sx={{fontWeight: 600}}>Total</Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography sx={{fontWeight: 600}}>650,000</Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>Equity</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography sx={{fontWeight: 600}}>500,000</Typography> */}
                                    </TableCell>
                                </TableRow>

                                <TableRow sx={{ py: 3}} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography>1</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography sx={{fontWeight: 600}}>Total</Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography sx={{fontWeight: 600}}>650,000</Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>Owner Equity</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>500,000</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow sx={{ py: 3, borderTop: "2px solid black", borderBottom: "2px solid black"}} hover role="checkbox" tabIndex={-1}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography>1</Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography sx={{fontWeight: 600}}>Total</Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Typography sx={{fontWeight: 600}}>1000000</Typography>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        {/* <Typography sx={{fontWeight: 600}}>Owner Equity</Typography> */}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                    <Typography sx={{fontWeight: 600}}>1000000</Typography>
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                        {/* <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        /> */}
                    </TableContainer>
                </Container>
            </Grid>

            <Footer />
        </>
    )
}

export default FinancialStatment
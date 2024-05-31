import { useState } from 'react';
import Header from '../../ui-components/header'
import './table.css'
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

const Home = () => {
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
                    <Typography variant='h3' sx={{textAlign: 'center', color: "#553a20", fontWeight: '600', mt: 4}}>Job Details</Typography>
                    <TableContainer sx={{mt: 2}}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            sx={{ py: 3, textAlign: 'center', fontWeight: 'bold !important' }}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                    <TableRow key={row._id} sx={{ py: 3 }} hover role="checkbox" tabIndex={-1}>
                                        <TableCell sx={{ textAlign: 'center' }}>{index + 1}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>
                                            <Typography>{row.name}</Typography>
                                        </TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>
                                            <Typography>{row.task}</Typography>
                                        </TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>
                                            <Typography>{row.requirment}</Typography>
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableContainer>
                </Container>
            </Grid>

            <Footer/>
        </>
    )
}

export default Home
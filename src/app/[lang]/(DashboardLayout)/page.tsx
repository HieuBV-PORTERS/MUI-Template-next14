'use client'
import { Grid, Box, Button, Typography } from '@mui/material';
import PageContainer from './components/container/PageContainer';
// components
import SalesOverview from './components/dashboard/SalesOverview';
import YearlyBreakup from './components/dashboard/YearlyBreakup';
import RecentTransactions from './components/dashboard/RecentTransactions';
import ProductPerformance from './components/dashboard/ProductPerformance';
import Blog from './components/dashboard/Blog';
import MonthlyEarnings from './components/dashboard/MonthlyEarnings';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '@/redux/slices/postsSlice';
import { useTranslations } from 'next-intl';

const Dashboard = () => {
  const posts = useSelector((state: any) => state.posts)
  const dispatch = useDispatch()
  console.log("posts", posts);

  const handleAddPost = () => {
    dispatch(addPost({ id: 1, title: "hahaha", description: "tesstttt" }))
  }

  const t = useTranslations();


  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Button onClick={handleAddPost} >add posts</Button>
      <Typography variant='h1'>{t.rich('hello')}</Typography>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;

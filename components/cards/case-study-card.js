import React, { useState, useEffect } from 'react';
import { Box, Grid, Container, Button } from 'theme-ui';
import { useMediaQuery } from 'react-responsive';

export default function CaseStudyCard ({ client, occupation, goal, failed, ...rest }) {

    const isMobile = useMediaQuery({ query: `(max-width: 800px)` });

    const [mobileMode, setMobileMode] = useState(true);

    useEffect(() => {

        setMobileMode(isMobile);
    
        }, []);

  return (
    <div id="case-study-card" sx={styles.section}>
    {mobileMode
    ?
        <Grid {...rest} sx={styles.mobileGrid} gap={2} columns={0}>
                <Box sx={styles.mobileDesignation1}>Client:</Box>
                <Box sx={styles.mobileInfo1}>{client}</Box>
                <Box sx={styles.mobileDesignation2}>Occupation:</Box>
                <Box sx={styles.mobileInfo2}>{occupation}</Box>
                <Box sx={styles.mobileDesignation3}>Goal:</Box>
                <Box sx={styles.mobileInfo3}>{goal}</Box>
                <Grid sx={failed ? styles.bottomGridFailed : styles.bottomGrid} gap={0} columns={0}>
                    <Container sx={styles.mobileResult}>Result:</Container>
                    <Box sx={styles.mobileAchieved}>{failed ? "FAILED" : "ACHIEVED"}</Box>
                </Grid>
        </Grid>
    :
        <Grid {...rest} sx={styles.mainGrid} gap={2} columns={[2, '4fr 1fr']}>
        <Grid sx={styles.leftGrid} gap={2} columns={[2, '1fr 4fr']}>
            <Box sx={styles.designation1}>Client:</Box>
            <Box sx={styles.info1}>{client}</Box>
            <Box sx={styles.designation2}>Occupation:</Box>
            <Box sx={styles.info2}>{occupation}</Box>
            <Box sx={styles.designation3}>Goal:</Box>
            <Box sx={styles.info3}>{goal}</Box>
        </Grid>
        <Grid sx={failed ? styles.rightGridFailed : styles.rightGrid} gap={0} columns={0}>
                <Container sx={styles.result}>Result:</Container>
                <Box sx={styles.achieved}>{failed ? "FAILED" : "ACHIEVED"}</Box>
        </Grid>
        </Grid>}
    </div>
  );
};

{/*
<Grid sx={styles.mobileGrid} gap={2} columns={0}>
                <Box sx={styles.mobileDesignation1}>Client:</Box>
                <Box sx={styles.mobileInfo1}>Gyuri</Box>
                <Box sx={styles.mobileDesignation2}>Occupation:</Box>
                <Box sx={styles.mobileInfo2}>eCommerce Expert</Box>
                <Box sx={styles.mobileDesignation3}>Goal:</Box>
                <Box sx={styles.mobileInfo3}>Making a shitload of money to travel to wherever da fuck and fuck bitches all day long while on passive income.</Box>
                <Grid sx={styles.rightGrid} gap={0} columns={0}>
                <Container sx={styles.mobileResult}>Result:</Container>
                <Box sx={styles.mobileAchieved}>ACHIEVED</Box>
                </Grid>
        </Grid>
*/}

const styles = {
    section: {
        mt: [2, 2, 2, 20],
    },
    mainGrid: {
        backgroundColor: 'secondary',
        color: 'whiteText',
        p: [10, 14, 16, 30],
    },
    rightGrid: {
        color: 'secondary',
        backgroundColor: 'accent',
        p: [2, 2, 2, 2],
    },
    rightGridFailed: {
        color: 'secondary',
        backgroundColor: 'primary',
        p: [2, 2, 2, 2],
    },
    leftGrid: {
        p: [10, 14, 16, 15],
    },
    result: {
        backgroundColor: 'secondary',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        mt: 'auto',
        mb: 'auto',
    },
    achieved: {
        fontSize: ['14px', '15px', '18px', '20px', '30px'],
        color: 'secondary',
        fontWeight: 'bold',
        textAlign: 'center',
        mt: 'auto',
        mb: 'auto',
    },
    designation1: {
        fontWeight: 'bold',
        pt: [5, 7, 8, 15],
    },
    designation2: {
        fontWeight: 'bold',
        pt: [5, 7, 8, 15],
        pb: [5, 7, 8, 15],
    },
    designation3: {
        fontWeight: 'bold',
        pb: [5, 7, 8, 15],
    },
    info1: {
        pt: [5, 7, 8, 15],
    },
    info2: {
        pt: [5, 7, 8, 15],
        pb: [5, 7, 8, 15],
    },
    info3: {
        pb: [5, 7, 8, 15],
    },
    //mobile
    mobileGrid: {
        backgroundColor: 'secondary',
        color: 'whiteText',
        textAlign: 'center',
        p: [2, 4, 6, 6],
    },
    bottomGrid: {
        color: 'secondary',
        backgroundColor: 'accent',
        p: [2, 2, 2, 2],
    },
    bottomGridFailed: {
        color: 'secondary',
        backgroundColor: 'primary',
        p: [2, 2, 2, 2],
    },
    mobileDesignation1: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    mobileDesignation2: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    mobileDesignation3: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    mobileInfo1: {
        pb: [1, 1, 1, 1],
    },
    mobileInfo2: {
        pb: [1, 1, 1, 1],
    },
    mobileInfo3: {
        pb: [5, 5, 5, 5],
    },
    mobileResult: {
        backgroundColor: 'secondary',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        mt: 'auto',
        mb: 'auto',
    },
    mobileAchieved: {
        fontSize: '30px',
        color: 'secondary',
        fontWeight: 'bold',
        textAlign: 'center',
        mt: 'auto',
        mb: 'auto',
    },
};

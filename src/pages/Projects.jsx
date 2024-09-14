import React, { useState, useEffect } from 'react'
import {
  Box,
  Grid,
  CircularProgress,
} from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import { db } from '../firebaseConfig';
import { query, collection, getDocs } from 'firebase/firestore';

function Projects() {
  
  const getProjects = async () => {
    setLoading(true);
    const projCollection = collection(db, "projects");
    const projQuery = query(projCollection);
    const snapshot = await getDocs(projQuery);
    const projectList = snapshot.docs.map((doc) => doc.data());
    return projectList;
  }
  
  const [projectList, setProjectList] = useState(null);
  const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
      const projectData = await getProjects();
      setProjectList(projectData);
      setLoading(false);
    };
		fetchData();
	}, []);
  
  return (
    <Box
      sx={{
        overflow: 'hidden',
        mx: '16px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      { loading ? <CircularProgress /> :
        <Grid container spacing={0}>
            {projectList.map(({title, type, description, details, timestamp, src, link}, index) =>
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <ProjectCard
                  title={title}
                  type={type}
                  description={description}
                  details={details}
                  timestamp={timestamp}
                  src={src}
                  link={link}
                />
              </Grid>
            )}
        </Grid>
      }
    </Box>
  );
}

export default Projects
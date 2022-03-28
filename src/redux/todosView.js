import { Container, Grid, Box, Typography } from '@mui/material'
import { TodosPanel } from './panel/todosPanel'
import { TodosList } from './list/todosList'

export function TodosView() {
    return (
        <Container>
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
                <Box component="div" sx={{ mt: 1, mb: 1 }}>
                    <Typography variant="h5" component="h1">
                        📝 Todos
                    </Typography>
                </Box>
                <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                    <TodosPanel />
                </Grid>
                <TodosList />
            </Grid>
        </Container>
    )
}

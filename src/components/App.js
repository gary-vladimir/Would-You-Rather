import Button from '@material-ui/core/Button';

function App() {
    return (
        <Button
            onClick={() => alert('welcome captain Gary')}
            variant="contained"
            color="primary"
        >
            start ship
        </Button>
    );
}

export default App;

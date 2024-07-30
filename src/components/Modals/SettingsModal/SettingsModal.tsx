import { Modal, Button, Box } from '@mui/material'

const SettingsModal = ({settingsOpen, setSettingsOpen}: any) => {
    const handleCloseSettings = () => {
        setSettingsOpen(false)
    }

    return (
        <div>
            <h1>Your Telegram Mini App</h1>
            <Modal
                open={settingsOpen}
                onClose={handleCloseSettings}
                aria-labelledby="settings-modal-title"
                aria-describedby="settings-modal-description"
                sx={{
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.paper',
                    p: 2,
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'background.default',
                        borderRadius: 1,
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <h2 id="settings-modal-title">Settings</h2>
                    <p id="settings-modal-description">
                        Here you can configure your settings.
                    </p>
                    {/* Add your settings content here */}
                    <Button variant="contained" onClick={handleCloseSettings}>
                        Close
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default SettingsModal;

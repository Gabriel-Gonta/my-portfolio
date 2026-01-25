import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Redirect() {
    const location = useLocation();

    useEffect(() => {
        // With HashRouter, we just need to sync the hash with the location
        // HashRouter handles routing automatically via hash fragments
        const hash = window.location.hash;
        if (hash && hash !== '#' + location.pathname) {
            // HashRouter will handle this automatically
            // Just ensure the hash matches the current route
            if (location.pathname !== '/') {
                window.location.hash = location.pathname;
            }
        }
    }, [location]);

    return null;
}

export default Redirect;
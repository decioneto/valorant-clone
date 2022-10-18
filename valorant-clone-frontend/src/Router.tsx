import { Routes, Route } from 'react-router-dom';
import { Header } from '@components/Header';

export function Router() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
            </Routes>
        </>
    );
}

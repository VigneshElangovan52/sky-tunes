import { render, screen } from "@testing-library/react"
import SongCard from "../SongCard"

it("Should have image in song card", ()=>{
    render(<SongCard />);
    const image = screen.getByRole("img");
    expect(image).toBeTruthy();
})

it("Should have title in song card", ()=>{
    render(<SongCard />);
    const title = screen.getAllByRole("textbox");
    expect(title).toBeDefined();
})

it("Should have buy button in song card", ()=>{
    render(<SongCard />);
    const buy = screen.getByText("Buy");
    expect(buy).toBeInTheDocument();
})
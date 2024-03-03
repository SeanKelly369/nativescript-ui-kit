import { Injectable } from '@angular/core'

import { ItemVM } from './item'

@Injectable({
  providedIn: 'root',
})
export class ItemService {

  idCounter: number = 278;
  items = new Array<ItemVM>(
    { id: 1, name: 'Hugo Lloris', position: 'Goalkeeper', positionColour: 'red', height: 1.88, nationality: 'France', dob: '26/12/1986', appearances: 32, goals: 0, assists: 0  },
    { id: 3, name: 'Oliver Skipp', position: 'Midfielder', positionColour: 'thistle', height: 1.75, nationality: 'England', dob: '16/09//2000', appearances: 12, goals: 1, assists: 1 },
    { id: 4, name: 'Dejan Kulusevski', position: 'Midfielder/Winger', positionColour: 'olive', height: 1.86, nationality: 'Sweden', dob:  '25/04/2000', appearances: 33, goals: 5, assists: 3},
    { id: 5, name: 'Pierre-Emile Højbjerg', position: 'Midfielder', positionColour: 'thistle', height: 1.87, nationality: 'Denmark', dob: '05/08/1995', appearances: 36, goals: 2, assists: 5},
    { id: 6, name: 'Pedro Porro', position: 'Right Back', positionColour: 'blue', height: 1.73, nationality: 'Spain', dob: '13/09/1999', appearances: 8, goals: 1, assists: 0 },
    { id: 7, name: 'Davinson Sánchez', position: 'Defender', positionColour: 'orangered', height: 1.87, nationality: 'Columbia', dob: '12/06/1996', appearances: 16, goals: 0, assists: 1 },
    { id: 8, name: 'Japhet Tanganga', position: 'Defender', positionColour: 'orangered', height: 1.84, nationality: 'England', dob: '31/03/1999', appearances: 5, goals: 0, assists: 0 },
    { id: 9, name: 'Son Heung-min', position: 'Forward', positionColour: 'yellow', height: 1.83, nationality: 'South Korea', dob: '08/07/1992', appearances: 33, goals: 11, assists: 13 },
    { id: 10, name: 'Lucas Moura', position: 'Forward', positionColour: 'yellow', height: 1.72, nationality: 'Brazil', dob: '13/08/1992', appearances: 12, goals: 3, assists: 2 },
    { id: 11, name: 'Richarlison', position: 'Forward', positionColour: 'yellow', height: 1.84, nationality: 'Brazil', dob: '10/05/1997', appearances: 14, goals: 6, assists: 0 },
    { id: 12, name: 'Pape Matar Sarr', position: 'Midfielder', positionColour: 'thistle', height: 1.85, nationality: 'Senegal', dob: '14/09/2002', appearances: 0, goals: 0, assists: 0 },
    { id: 13, name: 'Harry Kane', position: 'Forward', positionColour: 'yellow', height: 1.88, nationality: 'England', dob: '28/07/1993', appearances: 38, goals: 22, assists: 13 },
    { id: 14, name: 'Rodrigo Bentancur', position: 'Midfield', positionColour: 'maroon', height: 1.87, nationality: 'Uruguay', dob: '25/06/1997', appearances: 26, goals: 3, assists: 4 },
    { id: 17, name: 'Emerson Royal', position: 'Right Back/Wing Back', positionColour: 'aqua', height: 1.81, nationality: 'Brazil', dob: '14/01/1999', appearances: 19, goals: 1, assists: 4 },
    { id: 18, name: 'Ben Davies', position: 'Defender', positionColour: 'orangered', height: 1.81, nationality: 'Wales', dob: '24/04/1993', appearances: 35, goals: 5, assists: 3 },
    { id: 19, name: 'Ivan Perišić', position: 'Winger', positionColour: 'darkcyan', height: 1.86, nationality: 'Croatia', dob: '02/02/1989', appearances: 32, goals: 7, assists: 11 },
    { id: 20, name: 'Clément Lenglet', position: 'Defender', positionColour: 'orangered', height: 1.86, nationality: 'France', dob: '17/06/1995', appearances: 21, goals: 1, assists: 2 },
    { id: 21, name: 'Eric Dier', position: 'Defender/Defensive Midfielder', positionColour: 'cyan', height: 1.88, nationality: 'England', dob: '15/01/1994', appearances: 35, goals: 3, assists: 0 },
    { id: 22, name: 'Yves Bissouma', position: 'Midfielder', positionColour: 'thistle', height: 1.82, nationality: 'Ivory Coast', dob: '30/08/1986', appearances: 11, goals: 0, assists: 0 },
    { id: 23, name: 'Arnaut Danjuma', position: 'Winger', positionColour: 'darkcyan', height: 1.78, nationality: 'Nigeria', dob: '31/01/1997', appearances: 0, goals: 0, assists: 0 },
    { id: 24, name: 'Brandon Austin', position: 'Goalkeeper', positionColour: 'red', height: 1.88, nationality: 'England', dob: '08/01/1999', appearances: 0, goals: 0, assists: 0 },
    { id: 25, name: 'Fraser Forster', position: 'Goalkeeper', positionColour: 'red', height: 2.01, nationality: 'England', dob: '17/03/1988', appearances: 5, goals: 0, assists: 0 },
    { id: 26, name: 'Cristian Romero', position: 'Centre Back', positionColour: 'forestgreen', height: 1.85, nationality: 'Argentina', dob: '27/04/1998', appearances: 28, goals: 3, assists: 0 },
    { id: 27, name: 'Alfie Whiteman', position: 'Goalkeeper', positionColour: 'red', height: 1.89, nationality: 'England', dob: '02/08/1998', appearances: 0, goals: 0, assists: 0 },
    { id: 28, name: 'Ryan Sessegnon', position: 'Left Back/Left Midfield', positionColour: 'lime', height: 1.78, nationality: 'England', dob: '18/05/2000', appearances: 5, goals: 0, assists: 0 },
    { id: 29, name: "William Harmon", position: 'Wing Back', positionColour: 'salmon', height: 1.87, nationality: 'England', dob: "22/11/1986", appearances: 170, goals: 44, assists: 28 },
    { id: 30, name: "Diego Miller", position: 'Defender', positionColour: 'orangered', height: 1.98, nationality: "Scotland", dob: "16/11/1991", appearances: 305, goals: 32, assists: 19 },
    { id: 31, name: "Nicholas Soto", position: 'Winger', positionColour: 'skyblue', height: 1.76, dob: "7/5/1981", appearances: 265, goals: 61, assists: 66, nationality: "Argentina" },
    { id: 32, name: "Samuel Matthews", position: 'Goalkeeper', positionColour: 'red', height: 2.01, dob: "26/7/1982", appearances: 245, goals: 0, assists: 0, nationality: "Wales" },
    { id: 33, name: "David Flores", position: 'Striker', positionColour: 'lavender', height: 1.99, dob: "8/5/1990", appearances: 318, goals: 107, assists: 85, nationality: "Italy" },
    { id: 34, name: "Gabriel Santiago", position: 'Forward', positionColour: 'powderblue', height: 1.75, dob: "10/2/1981", appearances: 71, goals: 61, assists: 72, nationality: "Uruguay" },
    { id: 35, name: "Gabriel Mcdaniel", position: 'Winger', positionColour: 'skyblue', height: 1.84, dob: "16/1/1986", appearances: 358, goals: 28, assists: 1, nationality: "Canada" },
    { id: 36, name: "Andrew Hubbard", position: 'Winger', positionColour: 'skyblue', height: 2, dob: "17/6/1983", appearances: 354, goals: 119, assists: 86, nationality: "America" },
    { id: 37, name: "Charles Soto", position: 'Defender', positionColour: 'orangered', height: 1.78, dob: "20/9/2002", appearances: 99, goals: 98, assists: 91, nationality: "Belgian" },
    { id: 38, name: "Chase Nguyen", position: 'Forward', positionColour: 'powderblue', height: 1.8, dob: "28/10/1983", appearances: 227, goals: 47, assists: 75, nationality: "Cameroon" },
    { id: 39, name: "Carter Day", position: 'Forward', positionColour: 'powderblue', height: 1.9, dob: "5/5/2004", appearances: 32, goals: 122, assists: 34, nationality: "England" },
    { id: 40, name: "Gavin Chandler", position: 'Defender', positionColour: 'orangered', height: 1.75, dob: "1/2/2005", appearances: 116, goals: 5, assists: 70, nationality: "France" },
    { id: 41, name: "Cole Lopez", position: 'Wing Back', positionColour: 'salmon', height: 2, dob: "16/5/2000", appearances: 110, goals: 44, assists: 6, nationality: "Spain" },
    { id: 42, name: "Alex Higgins", position: 'Winger', positionColour: 'skyblue', height: 1.96, dob: "10/6/2004", appearances: 254, goals: 184, assists: 75, nationality: "Northern Ireland" },
    { id: 43, name: "Daniel Herrera", position: 'Forward', positionColour: 'powderblue', height: 1.85, dob: "10/12/1984", appearances: 31, goals: 194, assists: 68, nationality: "Argentina" },
    { id: 44, name: "Dominic Bowman", position: 'Defender', positionColour: 'orangered', height: 1.85, dob: "26/12/1981", appearances: 313, goals: 162, assists: 28, nationality: "England" },
    { id: 45, name: "Alex Wood", position: 'Midfielder', positionColour: 'thistle', height: 1.96, dob: "23/1/2007", appearances: 197, goals: 195, assists: 17, nationality: "New Zealand" },
    { id: 46, name: "David Rivera", position: 'Sweeper', positionColour: 'teal', height: 1.78, dob: "11/6/2003", appearances: 190, goals: 116, assists: 21, nationality: "Spain" },
    { id: 47, name: "Dominic Berry", position: 'Forward', positionColour: 'powderblue', height: 1.98, dob: "26/4/2003", appearances: 280, goals: 184, assists: 76, nationality: "The Netherlands" },
    { id: 48, name: "Colin Bowen", position: 'Striker', positionColour: 'lavender', height: 1.75, dob: "17/11/2007", appearances: 163, goals: 141, assists: 10, nationality: "Scotland" },
    { id: 49, name: "Caleb Cross", position: 'Forward', positionColour: 'powderblue', height: 2, dob: "9/6/1994", appearances: 238, goals: 83, assists: 73, nationality: "Republic of Ireland" },
    { id: 50, name: "Christopher Ford", position: 'Goalkeeper', positionColour: 'red', height: 1.87, dob: "21/6/1994", appearances: 69, goals: 0, assists: 0, nationality: "America" },
    { id: 51, name: "Oliver Hughes", position: 'Sweeper', positionColour: 'teal', height: 1.9, dob: "5/5/2008", appearances: 310, goals: 194, assists: 67, nationality: "Wales" },
    { id: 52, name: "Daniel Cruz", position: 'Defender', positionColour: 'orangered', height: 1.78, dob: "4/4/1983", appearances: 140, goals: 199, assists: 18, nationality: "Spain" },
    { id: 53, name: "Josiah Arnold", position: 'Winger', positionColour: 'skyblue', height: 1.88, dob: "11/5/2000", appearances: 348, goals: 125, assists: 65, nationality: "Germany" },
    { id: 54, name: "Isaac Wales", position: 'Forward', positionColour: 'powderblue', height: 1.86, dob: "22/7/1993", appearances: 222, goals: 194, assists: 43, nationality: "Scotland" },
    { id: 55, name: "Xavier Fletcher", position: 'Wing Back', positionColour: 'salmon', height: 1.83, dob: "21/10/1991", appearances: 242, goals: 83, assists: 83, nationality: "Spain" },
    { id: 56, name: "Chase Page", position: 'Midfielder', positionColour: 'thistle', height: 1.86, dob: "25/4/1985", appearances: 318, goals: 145, assists: 46, nationality: "Wales" },
    { id: 57, name: "Gabriel Patterson", position: 'Winger', positionColour: 'skyblue', height: 1.89, dob: "24/4/1985", appearances: 110, goals: 189, assists: 61, nationality: "Scotland" },
    { id: 58, name: "Timothy Marshall", position: 'Striker', positionColour: 'lavender', height: 1.85, dob: "15/9/2007", appearances: 295, goals: 164, assists: 57, nationality: "England" },
    { id: 59, name: "Henry Torres", position: 'Midfielder', positionColour: 'thistle', height: 1.78, dob: "22/2/1990", appearances: 394, goals: 141, assists: 50, nationality: "Portugal" },
    { id: 60, name: "Owen Dean", position: 'Sweeper', positionColour: 'teal', height: 1.97, dob: "27/6/1995", appearances: 13, goals: 74, assists: 82, nationality: "England" },
    { id: 61, name: "Daniel Henderson", position: 'Sweeper', positionColour: 'teal', height: 1.94, dob: "11/6/1982", appearances: 53, goals: 7, assists: 18, nationality: "Scotland" },
    { id: 62, name: "Colin Holt", position: 'Striker', positionColour: 'lavender', height: 1.77, dob: "5/12/1992", appearances: 69, goals: 159, assists: 36, nationality: "Northern Ireland" },
    { id: 63, name: "James Bailey", position: 'Goalkeeper', positionColour: 'red', height: 1.75, dob: "7/1/1982", appearances: 98, goals: 0, assists: 0, nationality: "Australia" },
    { id: 64, name: "Mason Ball", position: 'Striker', positionColour: 'lavender', height: 2.02, dob: "15/9/1988", appearances: 368, goals: 3, assists: 35, nationality: "England" },
    { id: 65, name: "Sebastian Douglas", position: 'Goalkeeper', positionColour: 'red', height: 2.02, dob: "10/3/2002", appearances: 367, goals: 0, assists: 0, nationality: "Scotland" },
    { id: 66, name: "Landon Bush", position: 'Wing Back', positionColour: 'salmon', height: 1.81, dob: "6/4/1986", appearances: 236, goals: 37, assists: 97, nationality: "Germany" },
    { id: 67, name: "Caleb Coleman", position: 'Midfielder', positionColour: 'thistle', height: 1.92, dob: "5/4/1987", appearances: 128, goals: 74, assists: 77, nationality: "Republic of Ireland" },
    { id: 68, name: "George Warren", position: 'Sweeper', positionColour: 'teal', height: 1.84, dob: "9/1/1996", appearances: 361, goals: 107, assists: 44, nationality: "England" },
    { id: 69, name: "Christopher Castillo", position: 'Forward', positionColour: 'powderblue', height: 2, dob: "26/4/1995", appearances: 302, goals: 70, assists: 18, nationality: "Spain" },
    { id: 70, name: "Jonathan Graves", position: 'Forward', positionColour: 'powderblue', height: 1.86, dob: "22/11/1999", appearances: 253, goals: 160, assists: 10, nationality: "Canada" },
    { id: 71, name: "Leonardo Byrd", position: 'Midfielder', positionColour: 'thistle', height: 1.87, dob: "6/8/1998", appearances: 282, goals: 178, assists: 5, nationality: "America" },
    { id: 72, name: "Andrew Silva", position: 'Sweeper', positionColour: 'teal', height: 1.89, dob: "4/6/1997", appearances: 133, goals: 140, assists: 83, nationality: "Brazil" },
    { id: 73, name: "Jordan Brown", position: 'Forward', positionColour: 'powderblue', height: 1.86, dob: "21/6/1995", appearances: 323, goals: 44, assists: 85, nationality: "Scotland" },
    { id: 74, name: "Alexander Lowe", position: 'Wing Back', positionColour: 'salmon', height: 1.91, dob: "5/4/1989", appearances: 110, goals: 56, assists: 32, nationality: "England" },
    { id: 75, name: "Henry Wallace", position: 'Winger', positionColour: 'skyblue', height: 1.99, dob: "19/10/2003", appearances: 113, goals: 143, assists: 90, nationality: "Scotland" },
    { id: 76, name: "Colin Ruiz", position: 'Defender', positionColour: 'orangered', height: 1.77, dob: "6/3/1997", appearances: 155, goals: 43, assists: 70, nationality: "Chile" },
    { id: 77, name: "Caleb Johnson", position: 'Goalkeeper', positionColour: 'red', height: 1.75, dob: "27/8/1997", appearances: 345, goals: 0, assists: 0, nationality: "England" },
    { id: 78, name: "Dominic Bailey", position: 'Wing Back', positionColour: 'salmon', height: 1.98, dob: "20/11/1989", appearances: 270, goals: 192, assists: 99, nationality: "Australia" },
    { id: 79, name: "Diego Butler", position: 'Winger', positionColour: 'skyblue', height: 1.75, dob: "6/9/1982", appearances: 245, goals: 112, assists: 30, nationality: "Argentina" },
    { id: 80, name: "Luke Mendez", position: 'Winger', positionColour: 'skyblue', height: 1.98, dob: "3/8/2000", appearances: 356, goals: 23, assists: 91, nationality: "Spain" },
    { id: 81, name: "Nathanial Harvey", position: 'Striker', positionColour: 'lavender', height: 2.04, dob: "16/9/1980", appearances: 352, goals: 35, assists: 6, nationality: "Republic of Ireland" },
    { id: 82, name: "Jackson Ruiz", position: 'Winger', positionColour: 'skyblue', height: 1.94, dob: "11/8/1990", appearances: 212, goals: 134, assists: 50, nationality: "Spain" },
    { id: 83, name: "Joseph Payne", position: 'Sweeper', positionColour: 'teal', height: 1.94, dob: "7/12/1997", appearances: 97, goals: 35, assists: 30, nationality: "England" },
    { id: 84, name: "Aaron Davidson", position: 'Defender', positionColour: 'orangered', height: 2, dob: "15/5/1994", appearances: 228, goals: 15, assists: 10, nationality: "Scotland" },
    { id: 85, name: "Dominic Jackson",position: 'Sweeper', positionColour: 'teal', height: 1.83, dob: "17/10/1997", appearances: 242, goals: 54, assists: 80, nationality: "England" },
    { id: 86, name: "Landon Stevenson", position: 'Defender', positionColour: 'orangered', height: 1.77, dob: "21/8/1981", appearances: 300, goals: 162, assists: 21, nationality: "Scotland" },
    { id: 87, name: "Xavier Simmons", position: 'Goalkeeper', positionColour: 'red', height: 1.9, dob: "9/4/1986", appearances: 29, goals: 0, assists: 0, nationality: "France" },
    { id: 88, name: "Matthew Benson", position: 'Defender', positionColour: 'orangered', height: 1.95, dob: "10/12/1983", appearances: 169, goals: 1, assists: 14, nationality: "England" },
    { id: 89, name: "Nathan Ward", position: 'Defender', positionColour: 'orangered', height: 1.78, dob: "7/9/1985", appearances: 246, goals: 60, assists: 32, nationality: "Republic of Ireland" },
    { id: 90, name: "Eric Austin", position: 'Midfielder', positionColour: 'thistle', height: 1.89, dob: "18/2/2001", appearances: 169, goals: 44, assists: 88, nationality: "England" },
    { id: 91, name: "Andrew Wolfe", position: 'Winger', positionColour: 'skyblue', height: 1.84, dob: "2/4/1988", appearances: 304, goals: 191, assists: 14, nationality: "German" },
    { id: 92, name: "Christian Stanley", position: 'Goalkeeper', positionColour: 'red', height: 2.02, dob: "18/5/2007", appearances: 358, goals: 0, assists: 0, nationality: "England" },
    { id: 93, name: "Owen Bell", position: 'Sweeper', positionColour: 'teal', height: 1.87, dob: "16/5/1999", appearances: 65, goals: 181, assists: 49, nationality: "England" },
    { id: 94, name: "Adam Austin", position: 'Wing Back', positionColour: 'salmon', height: 1.96, dob: "25/2/2000", appearances: 360, goals: 173, assists: 39, nationality: "England" },
    { id: 95, name: "Benjamin Vaughn", position: 'Midfielder', positionColour: 'thistle', height: 1.81, dob: "1/2/2009", appearances: 188, goals: 100, assists: 75, nationality: "England" },
    { id: 96, name: "Gabriel Gilbert", position: 'Striker', positionColour: 'lavender', height: 1.87, dob: "23/4/1994", appearances: 37, goals: 144, assists: 19, nationality: "England" },
    { id: 97, name: "Oliver Mills", position: 'Striker', positionColour: 'lavender', height: 1.78, dob: "25/7/1987", appearances: 130, goals: 46, assists: 64, nationality: "England" },
    {id: 98, name: "Jason Jackson", position: 'Goalkeeper', positionColour: 'red', height: 2, dob: "23/9/1993", appearances: 221, goals: 0, assists: 0, nationality: "England" },
    {id: 99, name: "Evan Foster", position: 'Winger', positionColour: 'skyblue', height: 1.78, dob: "23/5/2009", appearances: 64, goals: 119, assists: 41, nationality: "England" },
    {id: 100, name: "Colin Moss", position: 'Sweeper', positionColour: 'teal', height: 1.75, dob: "13/5/1997", appearances: 313, goals: 107, assists: 19, nationality: "England" },
    {id: 101, name: "Colin Hill", position: 'Sweeper', positionColour: 'teal', height: 1.95, dob: "26/5/2009", appearances: 249, goals: 144, assists: 78, nationality: "England" },
    {id: 102, name: "Nathanial Hale", position: 'Goalkeeper', positionColour: 'red', height: 1.76, dob: "2/8/1998", appearances: 186, goals: 0, assists: 0, nationality: "England" },
    {id: 103, name: "Charles Rice", position: 'Wing Back', positionColour: 'salmon', height: 2.04, dob: "8/12/2005", appearances: 356, goals: 58, assists: 22, nationality: "England" },
    {id: 104, name: "Joseph Moore", position: 'Winger', positionColour: 'skyblue', height: 1.95, dob: "19/8/1994", appearances: 198, goals: 64, assists: 98, nationality: "England" },
    {id: 105, name: "Caleb Lee", position: 'Midfielder', positionColour: 'thistle', height: 1.97, dob: "7/11/2008", appearances: 346, goals: 12, assists: 25, nationality: "England" },
    {id: 106, name: "Oliver Austin", position: 'Midfielder', positionColour: 'thistle', height: 1.76, dob: "11/4/1994", appearances: 195, goals: 171, assists: 63, nationality: "England" },
    {id: 107, name: "Leo Fleming", position: 'Midfielder', positionColour: 'thistle', height: 1.82, dob: "12/11/2005", appearances: 316, goals: 60, assists: 20, nationality: "England" },
    {id: 108, name: "Michael Gibson", position: 'Wing Back', positionColour: 'salmon', height: 1.98, dob: "13/7/2005", appearances: 186, goals: 163, assists: 6, nationality: "England" },
    {id: 109, name: "Cole Cruz", position: 'Sweeper', positionColour: 'teal', height: 1.84, dob: "17/7/2008", appearances: 117, goals: 185, assists: 91, nationality: "England" },
    {id: 110, name: "Brandon Sanchez", position: 'Defender', positionColour: 'orangered', height: 1.8, dob: "6/3/1985", appearances: 280, goals: 141, assists: 81, nationality: "England" },
    {id: 111, name: "Ian Warner", position: 'Midfielder', positionColour: 'thistle', height: 1.92, dob: "19/7/2002", appearances: 245, goals: 24, assists: 52, nationality: "England" },
    {id: 112, name: "Zachary Fox", position: 'Winger', positionColour: 'skyblue', height: 1.76, dob: "16/3/1992", appearances: 303, goals: 145, assists: 38, nationality: "England" },
    {id: 113, name: "Ethan Foster", position: 'Wing Back', positionColour: 'salmon', height: 1.94, dob: "6/1/2008", appearances: 183, goals: 127, assists: 27, nationality: "England" },
    {id: 114, name: "Isaac Leonard", position: 'Midfielder', positionColour: 'thistle', height: 2.03, dob: "5/1/1999", appearances: 228, goals: 159, assists: 59, nationality: "England" },
    {id: 115, name: "Isaac Collins", position: 'Goalkeeper', positionColour: 'red', height: 1.98, dob: "10/10/1991", appearances: 40, goals: 0, assists: 0, nationality: "England" },
    {id: 116, name: "Austin Silva", position: 'Winger', positionColour: 'skyblue', height: 1.79, dob: "2/1/2005", appearances: 88, goals: 74, assists: 64, nationality: "England" },
    {id: 117, name: "Isaac Chavez", position: 'Wing Back', positionColour: 'salmon', height: 1.75, dob: "18/12/2003", appearances: 27, goals: 14, assists: 7, nationality: "England" },
    {id: 118, name: "Ryan Price", position: 'Wing Back', positionColour: 'salmon', height: 1.9, dob: "2/4/1997", appearances: 318, goals: 144, assists: 51, nationality: "England" },
    {id: 119, name: "Leo Kennedy", position: 'Goalkeeper', positionColour: 'red', height: 2.03, dob: "28/2/1995", appearances: 322, goals: 0, assists: 0, nationality: "England" },
    {id: 120, name: "Connor Perry", position: 'Goalkeeper', positionColour: 'red', height: 1.88, dob: "15/1/2007", appearances: 107, goals: 0, assists: 0, nationality: "England" },
    {id: 121, name: "Eric Knight", position: 'Wing Back', positionColour: 'salmon', height: 1.82, dob: "9/5/2002", appearances: 329, goals: 68, assists: 9, nationality: "England" },
    {id: 122, name: "Joseph Hunt", position: 'Midfielder', positionColour: 'thistle', height: 1.8, dob: "23/9/1986", appearances: 390, goals: 13, assists: 53, nationality: "England" },
    {id: 123, name: "Carter Page", position: 'Striker', positionColour: 'lavender', height: 1.96, dob: "27/8/2009", appearances: 150, goals: 9, assists: 70, nationality: "England" },
    {id: 124, name: "Calvin Thomas", position: 'Striker', positionColour: 'lavender', height: 1.77, dob: "1/9/1994", appearances: 248, goals: 85, assists: 82, nationality: "England" },
    {id: 125, name: "Richard Wells", position: 'Midfielder', positionColour: 'thistle', height: 1.78, dob: "17/3/1988", appearances: 120, goals: 5, assists: 10, nationality: "Switzerland" },
    {id: 126, name: "Gabriel Austin", position: 'Striker', positionColour: 'lavender', height: 1.76, dob: "14/4/1998", appearances: 216, goals: 147, assists: 71, nationality: "England"},
    {id: 127, name: "Ryan James", position: 'Defender', positionColour: 'orangered', height: 1.75, dob: "14/8/2005", appearances: 390, goals: 48, assists: 43, nationality: "England"},
    {id: 128, name: "Luke Pearson", position: 'Sweeper', positionColour: 'teal', height: 1.88, dob: "17/3/1984", appearances: 15, goals: 153, assists: 60, nationality: "England"},
    {id: 129, name: "Nathanial Jenkins", position: 'Forward', positionColour: 'powderblue', height: 1.83, dob: "7/8/1983", appearances: 7, goals: 184, assists: 99, nationality: "England"},
    {id: 130, name: "Joseph Sims", position: 'Wing Back', positionColour: 'salmon', height: 1.89, dob: "10/1/1981", appearances: 372, goals: 79, assists: 66, nationality: "England"},
    {id: 131, name: "Evan Castillo", position: 'Defender', positionColour: 'orangered', height: 1.94, dob: "26/7/1991", appearances: 152, goals: 104, assists: 83, nationality: "England"},
    {id: 132, name: "Alexander Ramirez", position: 'Sweeper', positionColour: 'teal', height: 1.8, dob: "22/9/2007", appearances: 87, goals: 43, assists: 63, nationality: "England"},
    {id: 133, name: "Joseph Santiago", position: 'Wing Back', positionColour: 'salmon', height: 1.86, dob: "8/12/1999", appearances: 126, goals: 126, assists: 81, nationality: "England"},
    {id: 134, name: "Christopher Beck", position: 'Defender', positionColour: 'orangered', height: 1.8, dob: "28/2/2004", appearances: 286, goals: 52, assists: 28, nationality: "England"},
    {id: 135, name: "Eric Reid", position: 'Sweeper', positionColour: 'teal', height: 2.01, dob: "4/5/1989", appearances: 296, goals: 53, assists: 0, nationality: "England"},
    {id: 136, name: "Julian Hawkins", position: 'Wing Back', positionColour: 'salmon', height: 1.76, dob: "16/4/1989", appearances: 309, goals: 20, assists: 57, nationality: "England"},
    {id: 137, name: "Sebastian Page", position: 'Defender', positionColour: 'orangered', height: 1.79, dob: "22/11/1986", appearances: 20, goals: 198, assists: 91, nationality: "England"},
    { id: 138, name: "Henry Bowman", position: 'Sweeper', positionColour: 'teal', height: 1.92, dob: "14/12/2005", appearances: 113, goals: 85, assists: 39, nationality: "England" },
    { id: 139, name: "Henry Hansen", position: 'Winger', positionColour: 'skyblue', height: 1.89, dob: "27/10/1999", appearances: 208, goals: 30, assists: 56, nationality: "England" },
    { id: 140, name: "Aaron Garcia", position: 'Winger', positionColour: 'skyblue', height: 2.02, dob: "11/7/2007", appearances: 27, goals: 198, assists: 47, nationality: "England" },
    {id: 141, name: "Carter Duncan", position: 'Midfielder', positionColour: 'thistle', height: 1.99, dob: "25/6/2008", appearances: 314, goals: 66, assists: 3, nationality: "England"},
    {id: 142, name: "Vincent Love", position: 'Winger', positionColour: 'skyblue', height: 1.88, dob: "27/5/1983", appearances: 315, goals: 123, assists: 87, nationality: "England"},
    {id: 143, name: "Cole Arnold", position: 'Striker', positionColour: 'lavender', height: 1.95, dob: "17/3/1998", appearances: 23, goals: 47, assists: 53, nationality: "England"},
    {id: 144, name: "Benjamin Patterson", position: 'Winger', positionColour: 'skyblue', height: 1.98, dob: "27/10/2008", appearances: 362, goals: 43, assists: 90, nationality: "England"},
    {id: 145, name: "Owen Dunn", position: 'Defender', positionColour: 'orangered', height: 1.78, dob: "5/11/1981", appearances: 134, goals: 23, assists: 72, nationality: "England"},
    {id: 146, name: "Isaac Burke", position: 'Striker', positionColour: 'lavender', height: 1.91, dob: "15/4/2004", appearances: 4, goals: 128, assists: 52, nationality: "England"},
    {id: 147, name: "Luke Bowen", position: 'Goalkeeper', positionColour: 'red', height: 2.01, dob: "2/1/2006", appearances: 65, goals: 0, assists: 0, nationality: "England"},
    {id: 148, name: "Gabriel Holt", position: 'Goalkeeper', positionColour: 'red', height: 1.81, dob: "20/12/1986", appearances: 220, goals: 0, assists: 0, nationality: "England"},
    {id: 149, name: "Xavier Vaughn", position: 'Midfielder', positionColour: 'thistle', height: 1.77, dob: "16/2/1993", appearances: 106, goals: 186, assists: 8, nationality: "England"},
    {id: 150, name: "Samuel Brewer", position: 'Winger', positionColour: 'skyblue', height: 1.76, dob: "4/7/1996", appearances: 310, goals: 141, assists: 75, nationality: "England"},
    {id: 151, name: "Joseph Byrd", position: 'Defender', positionColour: 'orangered', height: 1.84, dob: "3/1/1986", appearances: 361, goals: 195, assists: 62, nationality: "England"},
    {id: 152, name: "Oliver Reeves", position: 'Striker', positionColour: 'lavender', height: 1.94, dob: "25/5/1983", appearances: 139, goals: 15, assists: 72, nationality: "England"},
    {id: 153, name: "Cooper Newman", position: 'Goalkeeper', positionColour: 'red', height: 1.76, dob: "16/1/2001", appearances: 13, goals: 0, assists: 0, nationality: "England"},
    {id: 154, name: "Oliver Green", position: 'Forward', positionColour: 'powderblue', height: 1.84, dob: "10/12/1983", appearances: 195, goals: 61, assists: 52, nationality: "England"},
    {id: 155, name: "Gabriel Sanders", position: 'Wing Back', positionColour: 'salmon', height: 1.96, dob: "12/8/1994", appearances: 128, goals: 111, assists: 96, nationality: "England"},
    {id: 156, name: "Jason Dean", position: 'Forward', positionColour: 'powderblue', height: 2, dob: "10/11/1987", appearances: 385, goals: 66, assists: 36, nationality: "England"},
    {id: 157, name: "Gabriel Crawford", position: 'Goalkeeper', positionColour: 'red', height: 1.93, dob: "20/5/1989", appearances: 196, goals: 0, assists: 0, nationality: "England"},
    {id: 158, name: "Jack Ray", position: 'Winger', positionColour: 'skyblue', height: 2.03, dob: "1/12/1994", appearances: 253, goals: 60, assists: 18, nationality: "England"},
    {id: 159, name: "Jason Brown", position: 'Defender', positionColour: 'orangered', height: 1.79, dob: "20/10/1985", appearances: 330, goals: 60, assists: 80, nationality: "England"},
    {id: 160, name: "Sebastian Coleman", position: 'Wing Back', positionColour: 'salmon', height: 1.95, dob: "23/5/1993", appearances: 218, goals: 103, assists: 11, nationality: "England"},
    {id: 161, name: "Julian Garcia", position: 'Forward', positionColour: 'powderblue', height: 1.99, dob: "20/9/2001", appearances: 373, goals: 174, assists: 88, nationality: "England"},
    {id: 162, name: "Brandon Stone", position: 'Midfielder', positionColour: 'thistle', height: 2.03, dob: "1/11/1991", appearances: 130, goals: 40, assists: 42, nationality: "England"},
    {id: 163, name: "Jack Perkins", position: 'Goalkeeper', positionColour: 'red', height: 1.91, dob: "17/2/1990", appearances: 294, goals: 0, assists: 0, nationality: "England"},
    {id: 164, name: "Ethan Payne", position: 'Defender', positionColour: 'orangered', height: 1.78, dob: "10/6/2005", appearances: 124, goals: 119, assists: 96, nationality: "England"},
    {id: 165, name: "Brandon Todd", position: 'Forward', positionColour: 'powderblue', height: 2.02, dob: "3/2/1991", appearances: 160, goals: 16, assists: 73, nationality: "England"},
    {id: 166, name: "Ryan Chambers", position: 'Striker', positionColour: 'lavender', height: 1.85, dob: "3/5/1983", appearances: 305, goals: 45, assists: 75, nationality: "England"},
    {id: 167, name: "Richard Mann", position: 'Defender', positionColour: 'orangered', height: 1.98, dob: "9/12/2001", appearances: 301, goals: 190, assists: 51, nationality: "England"},
    {id: 168, name: "Ethan Ball", position: 'Defender', positionColour: 'orangered', height: 2.03, dob: "8/12/1997", appearances: 149, goals: 89, assists: 88, nationality: "England"},
    {id: 169, name: "Cole Tucker", position: 'Winger', positionColour: 'skyblue', height: 1.88, dob: "15/2/1982", appearances: 130, goals: 163, assists: 7, nationality: "England"},
    {id: 170, name: "Noah Russell", position: 'Striker', positionColour: 'lavender', height: 1.76, dob: "28/2/1991", appearances: 160, goals: 1, assists: 0, nationality: "England"},
    {id: 171, name: "Jordan Matthews", position: 'Defender', positionColour: 'orangered', height: 1.78, dob: "10/1/2004", appearances: 170, goals: 191, assists: 7, nationality: "Spain"},
    {id: 172, name: "Max Curry", position: 'Sweeper', positionColour: 'teal', height: 1.77, dob: "28/5/1990", appearances: 62, goals: 93, assists: 85, nationality: "Spain"},
    {id: 173, name: "Nolan Chapman", position: 'Winger', positionColour: 'skyblue', height: 2.04, dob: "10/3/1989", appearances: 367, goals: 44, assists: 66, nationality: "Spain"},
    {id: 174, name: "Noah Hart", position: 'Midfielder', positionColour: 'thistle', height: 1.83, dob: "13/10/1995", appearances: 37, goals: 7, assists: 57, nationality: "Spain"},
    {id: 175, name: "Xavier Parks", position: 'Defender', positionColour: 'orangered', height: 1.85, dob: "15/2/1987", appearances: 264, goals: 63, assists: 38, nationality: "Spain"},
    {id: 176, name: "Leonardo Price", position: 'Midfielder', positionColour: 'thistle', height: 1.95, dob: "25/10/2003", appearances: 121, goals: 60, assists: 85, nationality: "Spain"},
    {id: 177, name: "Joseph Baldwin", position: 'Defender', positionColour: 'orangered', height: 1.79, dob: "12/2/1984", appearances: 56, goals: 32, assists: 83, nationality: "Spain"},
    {id: 178, name: "Carter Hines", position: 'Midfielder', positionColour: 'thistle', height: 1.95, dob: "26/2/1983", appearances: 69, goals: 116, assists: 44, nationality: "Spain"},
    {id: 179, name: "Nicholas Burke", position: 'Midfielder', positionColour: 'thistle', height: 1.94, dob: "7/1/2006", appearances: 332, goals: 5, assists: 52, nationality: "Spain"},
    {id: 180, name: "Cooper Dennis", position: 'Goalkeeper', positionColour: 'red', height: 2.03, dob: "1/6/1993", appearances: 47, goals: 0, assists: 0, nationality: "Spain"},
    {id: 181, name: "Aiden Banks", position: 'Sweeper', positionColour: 'teal', height: 1.99, dob: "21/11/1981", appearances: 5, goals: 93, assists: 98, nationality: "Spain"},
    {id: 182, name: "Caleb Curry", position: 'Goalkeeper', positionColour: 'red', height: 1.87, dob: "22/1/1982", appearances: 44, goals: 0, assists: 0, nationality: "Spain"},
    {id: 183, name: "Joseph Wright", position: 'Midfielder', positionColour: 'thistle', height: 1.8, dob: "19/11/2004", appearances: 134, goals: 50, assists: 75, nationality: "Spain"},
    {id: 184, name: "James Salazar", position: 'Forward', positionColour: 'powderblue', height: 1.85, dob: "28/7/2006", appearances: 12, goals: 110, assists: 82, nationality: "Spain"},
    {id: 185, name: "Dominic Riley", position: 'Goalkeeper', positionColour: 'red', height: 2, dob: "25/1/1988", appearances: 388, goals: 0, assists: 0, nationality: "Spain"},
    {id: 186, name: "Alexander Gordon", position: 'Defender', positionColour: 'orangered', height: 1.81, dob: "9/5/1997", appearances: 223, goals: 165, assists: 72, nationality: "Spain"},
    {id: 187, name: "James Ruiz", position: 'Sweeper', positionColour: 'teal', height: 1.8, dob: "14/8/1993", appearances: 17, goals: 71, assists: 35, nationality: "Spain"},
    {id: 188, name: "Chase Carr", position: 'Midfielder', positionColour: 'thistle', height: 1.94, dob: "6/7/1998", appearances: 39, goals: 53, assists: 19, nationality: "Spain"},
    {id: 189, name: "Caleb White", position: 'Striker', positionColour: 'lavender', height: 1.93, dob: "2/9/1985", appearances: 45, goals: 134, assists: 4, nationality: "Spain"},
    {id: 190, name: "Jonathan Long", position: 'Defender', positionColour: 'orangered', height: 1.8, dob: "1/3/1995", appearances: 21, goals: 0, assists: 43, nationality: "Spain"},
    {id: 191, name: "Henry Moreno", position: 'Striker', positionColour: 'lavender', height: 1.92, dob: "3/11/2001", appearances: 209, goals: 108, assists: 90, nationality: "Spain"},
    {id: 192, name: "Ethan Fox", position: 'Striker', positionColour: 'lavender', height: 1.83, dob: "16/6/2000", appearances: 126, goals: 5, assists: 24, nationality: "Spain"},
    {id: 193, name: "Connor Adams", position: 'Sweeper', positionColour: 'teal', height: 1.85, dob: "24/4/1996", appearances: 92, goals: 64, assists: 3, nationality: "Spain"},
    {id: 194, name: "Kevin Chandler", position: 'Midfielder', positionColour: 'thistle', height: 1.77, dob: "11/1/1982", appearances: 91, goals: 71, assists: 46, nationality: "Spain"},
    {id: 195, name: "William Cunningham", position: 'Striker', positionColour: 'lavender', height: 1.78, dob: "14/10/1986", appearances: 14, goals: 47, assists: 15, nationality: "Spain"},
    {id: 196, name: "Gabriel Hudson", position: 'Striker', positionColour: 'lavender', height: 1.81, dob: "6/2/1987", appearances: 235, goals: 117, assists: 29, nationality: "Spain"},
    {id: 197, name: "Henry Vaughn", position: 'Striker', positionColour: 'lavender', height: 2.02, dob: "18/9/1992", appearances: 62, goals: 47, assists: 41, nationality: "Spain"},
    {id: 198, name: "Xavier Blair", position: 'Defender', positionColour: 'orangered', height: 1.79, dob: "28/9/1980", appearances: 156, goals: 60, assists: 20, nationality: "Spain"},
    {id: 199, name: "Evan Bowen", position: 'Goalkeeper', positionColour: 'red', height: 1.92, dob: "26/8/1983", appearances: 217, goals: 0, assists: 0, nationality: "Spain"},
    {id: 200, name: "Cole Arnold", position: 'Wing Back', positionColour: 'salmon', height: 1.94, dob: "23/5/1988", appearances: 102, goals: 15, assists: 43, nationality: "Spain"},
    {id: 201, name: "Nathanial Keller", position: 'Winger', positionColour: 'skyblue', height: 1.88, dob: "20/12/1987", appearances: 310, goals: 181, assists: 87, nationality: "America"},
    {id: 202, name: "Aaron Daniels", position: 'Defender', positionColour: 'orangered', height: 1.99, dob: "19/4/1982", appearances: 165, goals: 77, assists: 94, nationality: "America"},
    {id: 203, name: "Landon Owens", position: 'Goalkeeper', positionColour: 'red', height: 1.77, dob: "24/7/1994", appearances: 292, goals: 0, assists: 0, nationality: "America"},
    {id: 204, name: "Evan Parks", position: 'Sweeper', positionColour: 'teal', height: 2.04, dob: "9/6/1994", appearances: 353, goals: 152, assists: 0, nationality: "America"},
    {id: 205, name: "Gabriel Matthews", position: 'Wing Back', positionColour: 'salmon', height: 1.8, dob: "26/1/2005", appearances: 39, goals: 41, assists: 31, nationality: "America"},
    {id: 206, name: "Jason Love", position: 'Midfielder', positionColour: 'thistle', height: 1.88, dob: "11/2/2002", appearances: 209, goals: 147, assists: 75, nationality: "America"},
    {id: 207, name: "Matthew Lewis", position: 'Forward', positionColour: 'powderblue', height: 2, dob: "3/2/1987", appearances: 294, goals: 66, assists: 96, nationality: "America"},
    {id: 208, name: "Andrew Leonard", position: 'Striker', positionColour: 'lavender', height: 1.89, dob: "26/11/2004", appearances: 379, goals: 65, assists: 22, nationality: "America"},
    {id: 209, name: "Liam Scott", position: 'Winger', positionColour: 'skyblue', height: 2.01, dob: "6/12/1993", appearances: 397, goals: 177, assists: 17, nationality: "America"},
    {id: 210, name: "Aaron Barker", position: 'Sweeper', positionColour: 'teal', height: 1.81, dob: "17/1/1989", appearances: 82, goals: 196, assists: 58, nationality: "America"},
    {id: 211, name: "Benjamin Brown", position: 'Defender', positionColour: 'orangered', height: 1.76, dob: "1/4/1981", appearances: 336, goals: 199, assists: 20, nationality: "America"},
    {id: 212, name: "William Cole", position: 'Defender', positionColour: 'orangered', height: 1.76, dob: "20/2/1998", appearances: 195, goals: 21, assists: 30, nationality: "America"},
    {id: 213, name: "Nathanial Howard", position: 'Forward', positionColour: 'powderblue', height: 1.79, dob: "6/8/2009", appearances: 221, goals: 23, assists: 18, nationality: "America"},
    {id: 214, name: "Connor Vaughn", position: 'Goalkeeper', positionColour: 'red', height: 1.77, dob: "21/12/2002", appearances: 221, goals: 0, assists: 0, nationality: "America"},
    {id: 215, name: "Carter Bates", position: 'Winger', positionColour: 'skyblue', height: 1.85, dob: "27/4/1987", appearances: 233, goals: 74, assists: 15, nationality: "America"},
    {id: 216, name: "Jonathan Gonzalez", position: 'Wing Back', positionColour: 'salmon', height: 1.98, dob: "25/10/2009", appearances: 198, goals: 109, assists: 45, nationality: "America"},
    {id: 217, name: "Nathanial Newton", position: 'Forward', positionColour: 'powderblue', height: 2.01, dob: "19/1/1999", appearances: 100, goals: 98, assists: 4, nationality: "Australian"},
    {id: 218, name: "James Lambert", position: 'Goalkeeper', positionColour: 'red', height: 1.82, dob: "18/3/1994", appearances: 388, goals: 0, assists: 0, nationality: "Australian"},
    {id: 219, name: "Aiden Powers", position: 'Forward', positionColour: 'powderblue', height: 2.04, dob: "22/9/1983", appearances: 240, goals: 96, assists: 75, nationality: "Australian"},
    {id: 220, name: "Brandon Dunn", position: 'Wing Back', positionColour: 'salmon', height: 1.85, dob: "1/2/1999", appearances: 109, goals: 126, assists: 98, nationality: "Australian"},
    {id: 221, name: "Daniel Palmer", position: 'Defender', positionColour: 'orangered', height: 1.76, dob: "22/7/1986", appearances: 181, goals: 41, assists: 43, nationality: "Australian"},
    {id: 222, name: "Landon Fox", position: 'Sweeper', positionColour: 'teal', height: 1.78, dob: "17/10/1989", appearances: 399, goals: 172, assists: 55, nationality: "Australian"},
    {id: 223, name: "Chase Bennett", position: 'Goalkeeper', positionColour: 'red', height: 2.04, dob: "26/4/1988", appearances: 127, goals: 0, assists: 0, nationality: "Australian"},
    {id: 224, name: "Jackson Page", position: 'Forward', positionColour: 'powderblue', height: 1.79, dob: "21/7/1999", appearances: 218, goals: 68, assists: 31, nationality: "Australian"},
    {id: 225, name: "Michael Smith", position: 'Midfielder', positionColour: 'thistle', height: 1.84, dob: "27/10/1985", appearances: 355, goals: 142, assists: 71, nationality: "Australian"},
    {id: 226, name: "Carter Blair", position: 'Sweeper', positionColour: 'teal', height: 1.84, dob: "10/12/1982", appearances: 208, goals: 15, assists: 65, nationality: "Australian"},
    {id: 227, name: "Gabriel Brown", position: 'Winger', positionColour: 'skyblue', height: 2.02, dob: "17/3/1984", appearances: 83, goals: 59, assists: 15, nationality: "Australian"},
    {id: 228, name: "James Diaz", position: 'Winger', positionColour: 'skyblue', height: 2.02, dob: "16/11/1992", appearances: 17, goals: 93, assists: 55, nationality: "Australian"},
    {id: 229, name: "Samuel Jimenez", position: 'Midfielder', positionColour: 'thistle', height: 1.97, dob: "21/11/1995", appearances: 211, goals: 191, assists: 35, nationality: "Australian"},
    {id: 230, name: "Gabriel Phillips", position: 'Striker', positionColour: 'lavender', height: 1.83, dob: "28/6/1981", appearances: 176, goals: 110, assists: 68, nationality: "Australian"},
    {id: 231, name: "Brandon Stevenson", position: 'Sweeper', positionColour: 'teal', height: 1.81, dob: "15/12/1996", appearances: 277, goals: 188, assists: 71, nationality: "Australian"},
    {id: 232, name: "Isaac Miles", position: 'Goalkeeper', positionColour: 'red', height: 1.92, dob: "5/1/1986", appearances: 121, goals: 0, assists: 0, nationality: "Australian"},
    {id: 233, name: "Landon Sharp", position: 'Midfielder', positionColour: 'thistle', height: 2, dob: "5/11/1998", appearances: 142, goals: 68, assists: 93, nationality: "Australian"},
    {id: 234, name: "George Jordan", position: 'Forward', positionColour: 'powderblue', height: 1.78, dob: "6/7/1995", appearances: 51, goals: 32, assists: 57, nationality: "Australian"},
    {id: 235, name: "Caleb Morris", position: 'Goalkeeper', positionColour: 'red', height: 2.03, dob: "5/12/1995", appearances: 331, goals: 0, assists: 0, nationality: "Australian"},
    {id: 236, name: "Aaron Allen", position: 'Midfielder', positionColour: 'thistle', height: 1.88, dob: "20/8/1990", appearances: 3, goals: 165, assists: 74, nationality: "Wales"},
    {id: 237, name: "Carter Sanchez", position: 'Wing Back', positionColour: 'salmon', height: 1.87, dob: "16/3/1982", appearances: 200, goals: 32, assists: 77, nationality: "Wales"},
    {id: 238, name: "Chase Berry", position: 'Forward', positionColour: 'powderblue', height: 1.79, dob: "20/1/1983", appearances: 239, goals: 103, assists: 2, nationality: "Wales"},
    {id: 239, name: "Eli Hale", position: 'Wing Back', positionColour: 'salmon', height: 1.77, dob: "13/12/1985", appearances: 184, goals: 4, assists: 89, nationality: "Wales"},
    {id: 240, name: "Isaac Garza", position: 'Midfielder', positionColour: 'thistle', height: 1.99, dob: "1/11/1992", appearances: 51, goals: 171, assists: 93, nationality: "Wales"},
    {id: 241, name: "Logan Sutton", position: 'Goalkeeper', positionColour: 'red', height: 1.95, dob: "4/2/2008", appearances: 180, goals: 0, assists: 0, nationality: "Wales"},
    {id: 242, name: "Christopher Barnes", position: 'Striker', positionColour: 'lavender', height: 1.76, dob: "17/3/2003", appearances: 182, goals: 86, assists: 63, nationality: "Wales"},
    {id: 243, name: "Adam Smith", position: 'Striker', positionColour: 'lavender', height: 1.81, dob: "16/9/1986", appearances: 330, goals: 143, assists: 99, nationality: "Wales"},
    {id: 244, name: "Benjamin Black", position: 'Winger', positionColour: 'skyblue', height: 1.92, dob: "3/3/1984", appearances: 276, goals: 166, assists: 8, nationality: "Wales"},
    {id: 245, name: "David Pierce", position: 'Sweeper', positionColour: 'teal', height: 1.85, dob: "8/1/2008", appearances: 26, goals: 187, assists: 56, nationality: "Wales"},
    {id: 246, name: "Jason Kennedy", position: 'Sweeper', positionColour: 'teal', height: 1.77, dob: "5/1/1996", appearances: 358, goals: 126, assists: 61, nationality: "Wales"},
    {id: 247, name: "Aiden Henderson", position: 'Striker', positionColour: 'lavender', height: 2, dob: "2/5/1991", appearances: 259, goals: 119, assists: 88, nationality: "Wales"},
    {id: 248, name: "Ethan Simmons", position: 'Defender', positionColour: 'orangered', height: 1.9, dob: "12/2/2003", appearances: 118, goals: 68, assists: 42, nationality: "Wales"},
    {id: 249, name: "Samuel Howell", position: 'Striker', positionColour: 'lavender', height: 1.83, dob: "9/6/2009", appearances: 262, goals: 110, assists: 34, nationality: "Wales"},
    {id: 250, name: "Cole Matthews", position: 'Striker', positionColour: 'lavender', height: 1.86, dob: "8/4/1991", appearances: 234, goals: 55, assists: 14, nationality: "Wales"},
    {id: 251, name: "Dominic Tucker", position: 'Forward', positionColour: 'powderblue', height: 1.78, dob: "15/5/1996", appearances: 152, goals: 24, assists: 26, nationality: "Wales"},
    {id: 252, name: "Nolan Henderson", position: 'Winger', positionColour: 'skyblue', height: 1.81, dob: "25/6/1986", appearances: 199, goals: 182, assists: 18, nationality: "Wales"},
    {id: 253, name: "Kevin Sanders", position: 'Striker', positionColour: 'lavender', height: 2.03, dob: "3/7/1995", appearances: 262, goals: 72, assists: 61, nationality: "Wales"},
    {id: 254, name: "Charles Rivera", position: 'Forward', positionColour: 'powderblue', height: 2.01, dob: "25/3/1981", appearances: 46, goals: 114, assists: 91, nationality: "Wales"},
    {id: 255, name: "Carter Edwards", position: 'Goalkeeper', positionColour: 'red', height: 1.77, dob: "21/5/1997", appearances: 365, goals: 0, assists: 0, nationality: "Wales"},
    {id: 256, name: "Lucas James", position: 'Defender', positionColour: 'orangered', height: 1.94, dob: "25/6/1986", appearances: 392, goals: 136, assists: 31, nationality: "Wales"},
    {id: 257, name: "Jeremiah Mcgee", position: 'Sweeper', positionColour: 'teal', height: 1.77, dob: "3/2/2008", appearances: 169, goals: 166, assists: 53, nationality: "Wales"},
    {id: 258, name: "Christian Wales", position: 'Defender', positionColour: 'orangered', height: 1.75, dob: "24/7/1990", appearances: 327, goals: 62, assists: 58, nationality: "Wales"},
    {id: 259, name: "Aaron Holland", position: 'Defender', positionColour: 'orangered', height: 1.94, dob: "10/3/1991", appearances: 161, goals: 150, assists: 35, nationality: "Wales"},
    {id: 260, name: "Richard Herrera", position: 'Defender', positionColour: 'orangered', height: 1.98, dob: "5/6/1986", appearances: 365, goals: 25, assists: 40, nationality: "Wales"},
    {id: 261, name: "Ryan Lane", position: 'Goalkeeper', positionColour: 'red', height: 1.79, dob: "13/9/1987", appearances: 117, goals: 0, assists: 0, nationality: "Wales"},
    {id: 262, name: "Jeremiah Carpenter", position: 'Goalkeeper', positionColour: 'red', height: 2.02, dob: "18/3/1987", appearances: 108, goals: 0, assists: 0, nationality: "Wales"},
    {id: 263, name: "Isaiah Griffith", position: 'Wing Back', positionColour: 'salmon', height: 1.96, dob: "10/9/1981", appearances: 293, goals: 133, assists: 89, nationality: "Wales"},
    {id: 264, name: "Oliver Carlson", position: 'Forward', positionColour: 'powderblue', height: 2.03, dob: "4/6/2000", appearances: 98, goals: 150, assists: 31, nationality: "Wales"},
    {id: 265, name: "Luke Elliott", position: 'Striker', positionColour: 'lavender', height: 1.84, dob: "28/11/1993", appearances: 85, goals: 133, assists: 46, nationality: "Wales"},
    {id: 266, name: "Josiah Castillo", position: 'Wing Back', positionColour: 'salmon', height: 1.8, dob: "28/3/1990", appearances: 134, goals: 126, assists: 85, nationality: "Wales"},
    {id: 267, name: "Matthew Bradley", position: 'Wing Back', positionColour: 'salmon', height: 2.04, dob: "7/2/2002", appearances: 198, goals: 170, assists: 70, nationality: "Wales"},
    {id: 268, name: "Michael Daniels", position: 'Midfielder', positionColour: 'thistle', height: 1.83, dob: "16/4/2001", appearances: 27, goals: 7, assists: 36, nationality: "Wales"},
    {id: 269, name: "Isaac Harrison", position: 'Midfielder', positionColour: 'thistle', height: 1.76, dob: "19/6/1983", appearances: 348, goals: 65, assists: 49, nationality: "Wales"},
    {id: 270, name: "Alexander Stevenson", position: 'Forward', positionColour: 'powderblue', height: 1.78, dob: "14/2/2003", appearances: 62, goals: 85, assists: 97, nationality: "Wales"},
    {id: 271, name: "Leonardo Kim", position: 'Sweeper', positionColour: 'teal', height: 1.75, dob: "23/9/1989", appearances: 348, goals: 186, assists: 80, nationality: "Wales"},
    {id: 272, name: "Benjamin Parks", position: 'Goalkeeper', positionColour: 'red', height: 1.97, dob: "1/10/1991", appearances: 295, goals: 0, assists: 0, nationality: "Wales"},
    {id: 273, name: "Eli Dawson", position: 'Sweeper', positionColour: 'teal', height: 1.77, dob: "2/3/1987", appearances: 322, goals: 194, assists: 34, nationality: "Wales"},
    {id: 274, name: "Diego White", position: 'Striker', positionColour: 'lavender', height: 1.8, dob: "13/4/1992", appearances: 272, goals: 72, assists: 4, nationality: "Wales"},
    {id: 275, name: "David Howell", position: 'Winger', positionColour: 'skyblue', height: 2.04, dob: "24/8/1981", appearances: 377, goals: 107, assists: 62, nationality: "Sweden"},
    {id: 276, name: "Adam Kim", position: 'Striker', positionColour: 'lavender', height: 1.97, dob: "1/4/2004", appearances: 304, goals: 174, assists: 16, nationality: "Sweden"},
    {id: 277, name: "Calvin Dunn", position: 'Wing Back', positionColour: 'salmon', height: 1.77, dob: "5/6/1984", appearances: 284, goals: 52, assists: 86, nationality: "Sweden"},
    {id: 278, name: "Carter Brewer", position: 'Midfielder', positionColour: 'thistle', height: 1.77, dob: "9/1/2005", appearances: 210, goals: 68, assists: 88, nationality: "Sweden"}
  )

  getItems(): Array<ItemVM> {
    return this.items;
  }

  generateRandomPlayer(): ItemVM {
    const firstNames = [
        'Liam', 'Noah', 'Ethan', 'Mason', 'Logan', 'Lucas', 'Henry', 'Benjamin', 'Samuel', 'Jackson',
        'David', 'Joseph', 'Michael', 'Gabriel', 'Alexander', 'Daniel', 'Matthew', 'William', 'Andrew', 'Anthony',
        'Christopher', 'James', 'Oliver', 'Caleb', 'Ryan', 'Isaac', 'Nathan', 'Owen', 'Julian', 'Elijah',
        'Adam', 'Connor', 'Dylan', 'Nathanial', 'Sebastian', 'Max', 'Colin', 'Aaron', 'Dominic', 'Evan',
        'Leo', 'Zachary', 'Xavier', 'Ian', 'Christian', 'Isaac', 'Aiden', 'Cooper', 'Samuel', 'Charles',
        'Gavin', 'Joseph', 'Brandon', 'Carter', 'Matthew', 'Luke', 'Jack', 'David', 'Jonathan', 'Nicholas',
        'Caleb', 'Wyatt', 'Jason', 'Evan', 'Adrian', 'Jeremiah', 'Eli', 'Gabriel', 'Chase', 'Henry',
        'Austin', 'Isaac', 'Tristan', 'Colin', 'Jordan', 'Owen', 'Xavier', 'Dominic', 'Jeremiah', 'Alex',
        'Leonardo', 'Eric', 'Josiah', 'Kevin', 'Brandon', 'Isaiah', 'Aaron', 'Landon', 'Diego', 'Tyler',
        'Cole', 'Ryan', 'Richard', 'Vincent', 'Carter', 'Steven', 'Timothy', 'Nolan', 'Calvin', 'George'
    ];

    const surnames = [
        'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor',
        'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson',
        'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King',
        'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter',
        'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins',
        'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey',
        'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez',
        'James', 'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross',
        'Henderson', 'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington',
        'Butler', 'Simmons', 'Foster', 'Gonzales', 'Bryant', 'Alexander', 'Russell', 'Griffin', 'Diaz', 'Hayes',
        'Myers', 'Ford', 'Hamilton', 'Graham', 'Sullivan', 'Wallace', 'Woods', 'Cole', 'West', 'Jordan',
        'Owens', 'Reynolds', 'Fisher', 'Ellis', 'Harrison', 'Gibson', 'Mcdonald', 'Cruz', 'Marshall', 'Ortiz',
        'Gomez', 'Murray', 'Freeman', 'Wells', 'Webb', 'Simpson', 'Stevens', 'Tucker', 'Porter', 'Hunter',
        'Hicks', 'Crawford', 'Henry', 'Boyd', 'Mason', 'Morales', 'Kennedy', 'Warren', 'Dixon', 'Ramos',
        'Reyes', 'Burns', 'Gordon', 'Shaw', 'Holmes', 'Rice', 'Robertson', 'Hunt', 'Black', 'Daniels',
        'Palmer', 'Mills', 'Nichols', 'Grant', 'Knight', 'Ferguson', 'Rose', 'Stone', 'Hawkins', 'Dunn',
        'Perkins', 'Hudson', 'Spencer', 'Gardner', 'Stephens', 'Payne', 'Pierce', 'Berry', 'Matthews', 'Arnold',
        'Wagner', 'Willis', 'Ray', 'Watkins', 'Olson', 'Carroll', 'Duncan', 'Snyder', 'Hart', 'Cunningham',
        'Bradley', 'Lane', 'Andrews', 'Ruiz', 'Harper', 'Fox', 'Riley', 'Armstrong', 'Carpenter', 'Weaver',
        'Greene', 'Lawrence', 'Elliott', 'Chavez', 'Sims', 'Austin', 'Peters', 'Kelley', 'Franklin', 'Lawson',
        'Fields', 'Gutierrez', 'Ryan', 'Schmidt', 'Carr', 'Vasquez', 'Castillo', 'Wheeler', 'Chapman', 'Oliver',
        'Montgomery', 'Richards', 'Williamson', 'Johnston', 'Banks', 'Meyer', 'Bishop', 'Mccoy', 'Howell', 'Alvarez',
        'Morrison', 'Hansen', 'Fernandez', 'Garza', 'Harvey', 'Little', 'Burton', 'Stanley', 'Nguyen', 'George',
        'Jacobs', 'Reid', 'Kim', 'Fuller', 'Lynch', 'Dean', 'Gilbert', 'Garrett', 'Romero', 'Welch',
        'Larson', 'Frazier', 'Burke', 'Hanson', 'Day', 'Mendoza', 'Moreno', 'Bowman', 'Medina', 'Fowler',
        'Brewer', 'Hoffman', 'Carlson', 'Silva', 'Pearson', 'Holland', 'Douglas', 'Fleming', 'Jensen', 'Vargas',
        'Byrd', 'Davidson', 'Hopkins', 'May', 'Terry', 'Herrera', 'Wade', 'Soto', 'Walters', 'Curtis',
        'Neal', 'Caldwell', 'Lowe', 'Jennings', 'Barnett', 'Graves', 'Jimenez', 'Horton', 'Shelton', 'Barrett',
        'Obrien', 'Castro', 'Sutton', 'Gregory', 'Mckinney', 'Lucas', 'Miles', 'Craig', 'Rodriquez', 'Chambers',
        'Holt', 'Lambert', 'Fletcher', 'Watts', 'Bates', 'Hale', 'Rhodes', 'Pena', 'Beck', 'Newman',
        'Haynes', 'Mcdaniel', 'Mendez', 'Bush', 'Vaughn', 'Parks', 'Dawson', 'Santiago', 'Norris', 'Hardy',
        'Love', 'Steele', 'Curry', 'Powers', 'Schultz', 'Barker', 'Guzman', 'Page', 'Munoz', 'Ball',
        'Keller', 'Chandler', 'Weber', 'Leonard', 'Wales', 'Lyons', 'Ramsey', 'Wolfe', 'Schneider', 'Mullins',
        'Benson', 'Sharp', 'Bowen', 'Daniel', 'Barber', 'Cummings', 'Hines', 'Baldwin', 'Griffith', 'Valdez',
        'Hubbard', 'Salazar', 'Reeves', 'Warner', 'Stevenson', 'Burgess', 'Santos', 'Tate', 'Cross', 'Garner',
        'Mann', 'Mack', 'Moss', 'Thornton', 'Dennis', 'Mcgee', 'Farmer', 'Delgado', 'Aguilar', 'Vega',
        'Glover', 'Manning', 'Cohen', 'Harmon', 'Rodgers', 'Robbins', 'Newton', 'Todd', 'Blair', 'Higgins',
        'Ingram'
    ]

    const positions = ['Goalkeeper', 'Defender', 'Sweeper', 'Wing Back', 'Midfielder', 'Winger', 'Forward', 'Striker'];

    const nationalityLikelihoodRatio = [
        { nationality: 'Argentina', likelihood: 80 },
        { nationality: 'Brazil', likelihood: 120 },
        { nationality: 'Germany', likelihood: 100 },
        { nationality: 'England', likelihood: 100 },
        { nationality: 'France', likelihood: 80 },
        { nationality: 'Spain', likelihood: 80 },
        { nationality: 'Italy', likelihood: 70 },
        { nationality: 'Netherlands', likelihood: 50 },
        { nationality: 'Portugal', likelihood: 70},
        { nationality: 'Uruguay', likelihood: 40 },
        { nationality: 'Belgium', likelihood: 50 },
        { nationality: 'Sweden', likelihood: 35 },
        { nationality: 'Croatia', likelihood: 50 },
        { nationality: 'Mexico', likelihood: 20 },
        { nationality: 'Colombia', likelihood: 20 },
        { nationality: 'Denmark', likelihood: 20 },
        { nationality: 'Japan', likelihood: 8 },
        { nationality: 'South Korea', likelihood: 12 },
        { nationality: 'Russia', likelihood: 2 },
        { nationality: 'Poland', likelihood: 20 },
        { nationality: 'Switzerland', likelihood: 20 },
        { nationality: 'Norway', likelihood: 8 },
        { nationality: 'Greece', likelihood: 7 },
        { nationality: 'Turkey', likelihood: 13 },
        { nationality: 'Scotland', likelihood: 11 },
        { nationality: 'Austria', likelihood: 8 },
        { nationality: 'Chile', likelihood: 6 },
        { nationality: 'United States', likelihood: 12 },
        { nationality: 'Australia', likelihood: 2 },
        { nationality: 'Egypt', likelihood: 3 },
        { nationality: 'Nigeria', likelihood: 25 },
        { nationality: 'Ghana', likelihood: 15 },
        { nationality: 'Ivory Coast', likelihood: 12 },
        { nationality: 'Cameroon', likelihood: 12 },
        { nationality: 'Senegal', likelihood: 10 },
        { nationality: 'Algeria', likelihood: 8 },
        { nationality: 'Morocco', likelihood: 8 },
        { nationality: 'Tunisia', likelihood: 6 },
        { nationality: 'Saudi Arabia', likelihood: 2 },
        { nationality: 'China', likelihood: 0.6 },
        { nationality: 'India', likelihood: 0.1 },
        { nationality: 'Qatar', likelihood: 0.01 },
        { nationality: 'Iran', likelihood: 0.01 },
        { nationality: 'Iraq', likelihood: 0.01 },
        { nationality: 'Lebanon', likelihood: 0.005 },
        { nationality: 'Jordan', likelihood: 0.005 },
        { nationality: 'Kuwait', likelihood: 0.005 },
        { nationality: 'United Arab Emirates', likelihood: 0.1 },
        { nationality: 'Oman', likelihood: 0.04 },
        { nationality: 'Bahrain', likelihood: 0.03 },
        { nationality: 'Yemen', likelihood: 0.02 },
        { nationality: 'Palestine', likelihood: 0.001 },
        { nationality: 'Thailand', likelihood: 0.5 },
        { nationality: 'Malaysia', likelihood: 0.5 },
        { nationality: 'Indonesia', likelihood: 1 },
        { nationality: 'Singapore', likelihood: 1 },
        { nationality: 'Vietnam', likelihood: 1 },
        { nationality: 'Philippines', likelihood: 1 },
        { nationality: 'Myanmar', likelihood: 1 },
        { nationality: 'Cambodia', likelihood: 2 },
        { nationality: 'Laos', likelihood: 2 },
        { nationality: 'Costa Rica', likelihood: 4},
        { nationality: 'Honduras', likelihood: 4},
        { nationality: 'Panama', likelihood: 3},
        { nationality: 'Canada', likelihood: 2},
        { nationality: 'Republic of Ireland', likelihood: 8},
        { nationality: 'Northern Ireland', likelihood: 4},
        { nationality: 'Wales', likelihood: 9},
        { nationality: 'Finland', likelihood: 6},
        { nationality: 'Iceland', likelihood: 4},
        { nationality: 'Luxembourg', likelihood: 1.2},
        { nationality: 'Liechtenstein', likelihood: 0.01},
        { nationality: 'Monaco', likelihood: 0.01},
        { nationality: 'Andorra', likelihood: 0.01},
        { nationality: 'San Marino', likelihood: 0.01},
        { nationality: 'Vatican City', likelihood: 0.005},
        { nationality: 'Cyprus', likelihood: 0.2}
      ];

    const totalLikelihood = nationalityLikelihoodRatio.reduce((sum, country) => sum + country.likelihood, 0);
    let cumulativeRatio = 0;
    const cumulativeRatioList = nationalityLikelihoodRatio.map((country) => {
      cumulativeRatio += country.likelihood / totalLikelihood;
      return { nationality: country.nationality, cumulativeRatio };
    });

    const randomNum = Math.random();
    const nationality = cumulativeRatioList.find((country) => randomNum <= country.cumulativeRatio).nationality;

    const randomFirstNamesIndex = Math.floor(Math.random() * firstNames.length);
    const firstName = firstNames[randomFirstNamesIndex];

    const randomSurNamesIndex = Math.floor(Math.random() * surnames.length);
    const surName = surnames[randomSurNamesIndex];

    const newPlayer: ItemVM = new ItemVM;
    newPlayer.id = this.idCounter++;
    newPlayer.name = `${firstName} ${surName}`;
    newPlayer.position = positions[Math.floor(Math.random() * positions.length)];
    newPlayer.positionColour = '';

    switch(newPlayer.position) {
      case 'Goalkeeper':
        newPlayer.positionColour = 'red';
        break;
      case 'Defender':
        newPlayer.positionColour = 'orangered';
        break;
      case 'Sweeper':
        newPlayer.positionColour = 'teal';
        break;
      case 'Wing Back':
        newPlayer.positionColour = 'salmon';
        break;
      case 'Midfielder':
        newPlayer.positionColour = 'thistle';
        break;
      case 'Winger':
        newPlayer.positionColour = 'skyblue';
        break;
      case 'Forward':
        newPlayer.positionColour = 'powderblue';
        break;
      case 'Striker':
        newPlayer.positionColour = 'lavender';
        break;
    }

    newPlayer.nationality = nationality;
    newPlayer.height = Math.floor(Math.random() * 30 + 160) / 100; // Random height between 1.6 and 1.9 meters
    newPlayer.dob = Math.floor(Math.random() * 28 + 1) + '/' + Math.floor(Math.random() * 12 + 1) + '/' + (Math.floor(Math.random() * 30) + 1980); // Random date of birth
    newPlayer.appearances = Math.floor(Math.random() * 400); // Random number of appearances
    if(newPlayer.position === 'Goalkeeper') {
      newPlayer.goals = 0;
      newPlayer.assists = 0;
    } else {
      newPlayer.goals = Math.floor(Math.random() * 200); // Random number of goals
      newPlayer.assists = Math.floor(Math.random() * 100); // Random number of assists
    }    
    return newPlayer;
  };

  getItem(id: number): ItemVM {
    return this.items.filter((item) => item.id === id)[0]
  }
}

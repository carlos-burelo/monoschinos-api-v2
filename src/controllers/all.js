import { parse } from 'node-html-parser';
import axios from 'axios';
import { attr, api } from '../config.js';


export async function getAnimes(req, res) {
  try {
    let { page = '1' } = req.params;
    const { data } = await axios.get(`${api.all(page)}`);
    const html = parse(data);
    res.status(200).json(
      html.querySelectorAll('.heromain .row .col-md-4.col-lg-2.col-6').map((i) => {
        return {
          id: attr(i, 'a', 'href').split('/').pop() || null,
          title: i.querySelector('.seristitles').text.trim() || null,
          image: attr(i, '.animemainimg', 'src') || null,
        };
      })
    );
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

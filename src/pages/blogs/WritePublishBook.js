// src/pages/blogs/WritePublishBook.js

import React from 'react';
import title from 'src/assets/graphics/pages/blogs/WritePublishBook/title.png';
import image1 from 'src/assets/graphics/pages/blogs/WritePublishBook/1.png';
import image8 from 'src/assets/graphics/pages/blogs/WritePublishBook/8.1.png';
import image8part2 from 'src/assets/graphics/pages/blogs/WritePublishBook/8.2.png';
import image10 from 'src/assets/graphics/pages/blogs/WritePublishBook/10.png';
import image13 from 'src/assets/graphics/pages/blogs/WritePublishBook/13.png';
import image14 from 'src/assets/graphics/pages/blogs/WritePublishBook/14.1.png';
import image14part2 from 'src/assets/graphics/pages/blogs/WritePublishBook/14.2.png';
import image14part3 from 'src/assets/graphics/pages/blogs/WritePublishBook/14.3.png';
import image16 from 'src/assets/graphics/pages/blogs/WritePublishBook/16.png';
import image22 from 'src/assets/graphics/pages/blogs/WritePublishBook/22.1.png';
import image22part2 from 'src/assets/graphics/pages/blogs/WritePublishBook/22.2.png';
import image23 from 'src/assets/graphics/pages/blogs/WritePublishBook/23.1.png';
import image23part2 from 'src/assets/graphics/pages/blogs/WritePublishBook/23.2.png';
import image27 from 'src/assets/graphics/pages/blogs/WritePublishBook/27.png';
import image31 from 'src/assets/graphics/pages/blogs/WritePublishBook/31.1.png';
import image31part2 from 'src/assets/graphics/pages/blogs/WritePublishBook/31.2.png';
import image31part3 from 'src/assets/graphics/pages/blogs/WritePublishBook/31.3.png';

const WritePublishBook = () => {
    return (
        <div>
            <div className='main'>
                <div className="column1"></div>
                <div className="column2">
                    <br />
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <h1>How to write and Publish a book</h1>
                        <img src={title} alt="Books on a shelf" />
                    </div>
                    <p><b>Updated:</b> February 10th, 2023.</p>

                    <p><b>Purpose:</b> If you've ever wanted to write your own book, or self publish a book follow the steps below. Even if you don't want to self publish and instead want to submit to a existing major publisher, this guide will still show you how to write a book and get it ready for submission.</p>

                    <p><b>Prerequisite:</b> Nothing.</p>

                    <p><b>Time taken:</b> For the inexperienced writer and publisher expect at least 6 weeks (8 weeks best) for having their work reviewed, edited, fixed, illustrated, compiled, submitted on IngramSpark for approval (or a publishing house), waiting for approval, if necessary to print author copies to send for government cataloguing legal requirements then waiting for availability through all retailers.</p>

                    <h3>Frequently asked questions</h3>

                    <p>What is self-publishing?</p>

                    <p>Refers to having a book managed by yourself, or a third party with full ownership to the author, to be made available for purchase. E.g., through an online website, or major retailers.</p>

                    <p>What is traditional publishing?</p>

                    <p>Refers to writing a book that will be accepted in submission guidelines to major established book publishers such as Penguin which will brand your book with their company name/logo and they will take care of everything themselves, and typically hold ownership of your book under contracts. You get paid royalty, however they set the prices, availability etc., The publishing house markets and manages the book which paying you royalties.</p>

                    <p>Self-publish OR traditional publish?</p>

                    <p>Getting a traditional publishing house to accept your book can be difficult but brings prestige, marketing, better profit, no management required leaving author time to enjoy life, and is the aim of most authors. Most people choose the easier option of self-publishing while retaining full ownership of their own book.</p>

                    <p>Starting own publishing company?</p>

                    <p>A self-publishing author can start their own company. Their are many benefits and cons. See below sections on creating a publishing company.</p>

                    <h3>Costs to write/publish</h3>

                    <p>Notes: All prices in Australian dollars (AUD) are estimates at time of writing.</p>

                    <li>
                        <ul>Reviewing/Editing - $50 - $100 for children's picture book, $300 - $800 for young adult novels, $500 - $2500 for novels. With the higher end cost reserved for the best quality of proof-reading. For Non-fiction books such as textbooks, language learning books etc.., Price depends on length and complexity. Expect to pay from $5 - $20 a page for complex work (book contents truth checked, references checked, any potential legal hazards in compliance checked, etc.). Cheaper starting price is reserved for simple books on recipe books, language learning books, high school exercises, travel guides etc., whereas highly specialised subjects such as law, medicine, engineering, physics incur extra costs as qualified lawyers, healthcare professionals, engineers, etc., will need to review work. It's best to get a qualified professional from whatever subject/topic your writing on and pay per hour to review and edit. E.g. pay a translator $10 a page to review your "English to German dictionary book".</ul>
                        <ul>Illustrations: ~$30 - $120 an image (digital or physical) depending on the quality. Lowest costs are for photos, children's pictures or simple characters, shapes, charts, tables, etc.. Highest costs are associated with complex and scientifically accurate illustrations.</ul>
                        <ul>Legal deposit shipping - plan extra ~$50+ highly dependent</ul>
                        <ul>Printing & Shipping - ~$2 - $10+ per book printed using overseas suppliers in China to be printed and delivered to yourself to send to customers, or you can find a deal with a supplier to deliver directly to the customer for even cheaper option.</ul>
                    </li>

                    <h3>What self-publishers to use?</h3>

                    <p>The big 3 main self-publishers to use are IngramSpark, Amazon and Smashwords. Reedsy have a great article of the top self publishers in 2023. For the purpose of this article we will discuss the 2 biggest.</p>

                    <b>IngramSpark</b>

                    <li>
                        <ul>Print - Widest reach. One of the only Hardback edition POD supplier. IngramSpark uploads your eBook and print file into Amazon for sale, however you pay IngramSpark to print physical books not Amazon which is more expensive.</ul>
                        <ul>Publishing - $100 for 1 paperback, 1 hardback and 1 eBook uploaded through IngramSpark.</ul>
                        <ul>eBooks/epubs - ePubs are free to upload and sell on Amazon Kindle provided they are under a certain file size and 30% commission to Amazon. With larger file sizes there are 70% commission to Amazon.</ul>
                        <ul>Returns - Hidden costs - The big problem with self publishing e.g. using IngramSpark is that returned books by retail outlets are lost profit. If they buy 100 books and return 90, you have to pay for all 90 books printed. The chances of returns however is low as the hustle of someone purchasing a book, going home/having it delivered, reading it, deciding it needs to be returned and physically sending it for returning back to book retailer is time consuming and not worth it for the consumer</ul>
                    </li>

                    <b>Amazon</b>

                    <p>Print - Cheap</p>
                    <p>ebooks/epubs - ePubs are free to upload and sell on Amazon Kindle provided they are under a certain file size and 30% commission to Amazon. With larger file sizes there are 70% commission to Amazon.</p>

                    <h3>Steps to write and publish a book</h3>
                    <p>For demonstration purposes we will use IngramSpark as the self-publisher but this guide can be changed to suit your needs.</p>

                    <p>1. <b>Writing a book</b> first requires typing your draft book also known as a manuscript in a digital format such as a Microsoft Word document. A rough guide of what pages to include in a book is a Front cover, imprint page (for copyrights, further information, etc.), (optional) acknowledgement page (Giving thanks to who inspired, helped or who the books dedicated to), (optional) table of contents, book interior (main contents) and back cover (with blurb usually 300 word description of book) and if necessary references, appendix etc. Anything you're unsure of or mistakes made can be escalated to the editor anytime. The illustrator and editor can decide which font to best use.book manuscript example page</p>
                    <img src={image1} alt="Books on a shelf" />
                    <p>2. <b>Trim sizes</b> (Portrait, Square, Landscape, etc.) refer to the size of the printed book. Necessary step to ensure the most cost-effective print solution is found. Odd custom book sizes e.g. 14" x 14" are difficult to print and hence more expensive than a traditional 8.5" x 8.5" In general the trim size to choose depends on the audience of the book. e.g. Children's books are preferably square 8.5" x 8.5", or fiction novels are generally 5.5" x 8.5" to be easy to hold in one hand and read, whereas non-fiction books such as language learning guides are larger e.g. 6.5" x 9" where more eye space on the book is preferred for digesting the information on the page. 2 great visualisation resources to understand what a book would look like are Reedsy and for Children's book in particular a blog by a Brooke Vitale Editorial Services it's strongly important to realise that hardbacks have a fold on the side it's glued from. so the cover page image will have a crease on the side. This is normal, however some books to ensure to centre away from the crease and into the middle. This is an illustrator/editor decision based on the cover guidelines, have them look at examples of IngramSpark picture books photos online.</p>

                    <p>3. <b>Cover materials</b> are (Hardback, paperback, boardbook, dust jackets, leather etc.). Hardback books demand premium prices because of their cost to produce and durability and aesthetics they require a minimum amount of pages which will allow for a spine. Paperback books are made of cheap paper, bindings and weaker construction. For Children's books you will often see Boardbook used which is a method where all pages are thick boards that are strong, easier to clean and give an impression of holding wooden furniture. Dustjackets refer to the wrapping cover of the book, used for either promotion advertisement space or to protect the book cover for a more premium feeling.</p>

                    <p>4. <b>Bindings</b> also known as book bindings are methods that book pages are stuck together at the spine to form a book. There are 4 common methods, Traditionally for hardcover specific books there is Case binding, also known as hardcover binding, a method where sections of pages are stitched together and glued to the spine. The cover is usually made of high quality strong material such as leather. When opened the book lays flat. They're expensive, heavy but durable and aesthetically pleasing. For all books the 2 main methods of binding are used Perfect binding (the most common method) where pages are glued to the spine. with a glue called ethylene vinyl acetate (EVA). The cover material is a heavier paper material. It's cheap but weak and cannot lay flat. The second popular paperback binding method is PUR binding (named after the glue material polyurethane reactive [PR]) which uses the same method as Perfect binding but a different glue. It's more expensive but can lay flat easier then Perfect binding and is stronger. For simple reading material such as magazines, journals, brochures, menus etc., Saddle stich binding is a method in which pages are simply stapled together (with metal staples).</p>

                    <p>5. <b>Cover and page coating materials</b> (Matte or gloss etc.). refer to the material used to coat the pages and cover. In general gloss is the industry standard for covers. Matte book covers exist for more premium feeling to book covers. Leather is an another durable but costly option.</p>

                    <p>6. <b>Page material</b> (gsm sizes, 50, 70, 150 etc.) the higher the gsm (grams per square metre) which is the weight of the page and indicates the strength and quality of the page, the more cost to print. 50 gsm is poor quality for cheap trade paperback novels, whereas 70 gsm is suited to standard quality. 70lb/104gsm which IngramSpark offers is the highest and costliest gsm but best for pictures such as children's picture books. The Premium colour option is the same 70lb/104gsm weight however the colour is more vivid but too expensive for most. To see an example difference between premium vs non premium colour see an article comparison. Outside of IngramSpark 150gsm is best for picture/photo books.</p>

                    <p>7. <b>Colour ranges</b> are (RGB, CMYK, or pantone) which are primarily a concern for the illustrator. Pantone refers to ink colours which don't translate well to monitor/screen viewing. Metallic pantone colours cannot be viewed accurately with an generic computer screen or tablet, the colour will need to be converted to an CMYK colour for accurate projection.</p>

                    <p>8. <b>Illustrations</b> Affordable digital and physical illustrators can be found on Fiverr illustrators or any artist can do. Choose someone longterm that can draw all the images with the same theme and design and have an easy way to contact for changes or additions in the future. The illustrator will also need to create a .print cover and other files using IngramSpark's file creation guide here. Digital modifiable illustrations carry the benefit of being able to modify the resolution, image, shape etc. anytime e.g. pictures drawn in popular digital drawing program Photoshop, can be saved in .psd file format and easily modified anytime.Illustration example IngramSpark print cover .pdf file example</p>
                    <img src={image8} alt="Books on a shelf" />
                    <img src={image8part2} alt="Books on a shelf" />
                    <p>9. <b>Creating a publishing company</b> You may decide to create your own publishing company name and brand. The benefits allow an established brand to easily market books in the future. This is as simple as registering a business in your own country as a book publisher, then setting up a name, address for sending and delivering important documents and for book returns, this allows governments, companies, libraries, schools, etc.. to have a formal method to purchase your book following regulations. The cons are if your book does become famous, then it's unlikely that a famous, or prestigious publishing house will ever accept your book. Regardless the publishing company name you use becomes the name/logo in your imprint page, book cover, and for ISBN registration, marketing, and for IngramSpark.</p>

                    <p>10. <b>Imprint page</b> is usually the first page or before the inner cover. It entails the legal ownership of the book, disclaimers, acknowledgements (if not a separate page), publishing company details, where to find out more about the book, the author or other book editions and more. The Self-Publishing School has an free in-depth article on what exactly to include. Imprint page example</p>
                    <img src={image10} alt="Books on a shelf" />
                    <p>11. <b>Translating</b> into other languages (using Dictionaries, Google Translate, Microsoft Word Translate, etc.) with trusted translators to verify using Fiverr and different independent firms where accuracy is paramount.</p>

                    <p>12. <b>Proofreading</b> reviewing and editing refer to the stage where your manuscript (draft book) is reviewed for justification, meaning, clarity, truth, quality, consistency and errors in spelling, grammar etc. to be addressed. There are 2 persons involved but some can both do the same task, a reviewer to read and review, and editor to read and make changes. Simple reviewing and editing can be done by friends or family, or professional paid independent reviewers/editors. E.g. we can use trusted sellers on Fiverr, or reviewing agencies such as Kirkus reviews. Repeat the review and editing stage until all issues and questions are answered.</p>

                    <p>13. <b>Formatting and Converting</b> the manuscript (book) from one format to another for print involves converting the .doc or .docx file to .pdf file format. For eBooks the same manuscript .doc etc. files are converted to .epub, or .mobi, .pdf, etc., file formats using Calibre which also ads metadata of the book's details to it. Calibre is a free multi-platform/OS software installed locally on your computer. Once installed, you can simply drag and drop your .pdf book into the software open area, and it will import the book. Then click "convert to eBook" option which will start a job to convert the book into a .epub file, a timer is shown at the bottom. When file is converted, you can click on the book and "edit metadata" to enter in details about, Title, Author, Author sort (surname, firstname naming convention), genre, details (isbn:xxxxxxxxxxxxx goes there), etc. You can then double click to open the file and test or drag and drop onto the desktop and load it into a connected e-reader to test .epub. Once satisfied you can choose to keep the cover separate, or join using the upload cover option, save book and drag and drop complete file onto your desktop again. If the process is difficult, consider following tutorials on Youtube or through an editor to format and convert the book for you. Image of Calibre a free ebook making software</p>
                    <img src={image13} alt="Books on a shelf" />
                    <p>14. <b>ISBN Account creation</b> with your local ISBN registry website (e.g. Bowker for the USA) is necessary to purchase ISBNs (The unique 13 digit barcode number that allows your book to be tracked worldwide), applying barcodes to back cover of print files (for eBook's barcodes aren't necessary) and optionally applying non static QR codes, and finally entering Metadata of book into IngramSpark for retailers to use. Buy and apply an ISBN for each physical and epub book edition e.g. Hardback/paperback/epub 1st, 2nd, 3rd etc. you only need 1 epub book. Don't use free ISBNs provided by retailers. ISBNs can be extremely cheap if purchased in bulk. Barcodes only need to be applied to the back of printed books. Don't modify the barcode other than changing size. This is for retail physical book stock take scanning. It is important to make sure the publishing date and the availability option which by default should be set to Active record is correct. This may never change again in some search engines such as Google search results. Read further ahead to see best time to publish.  Metadata example  Australia's ISBN retailer Bowker Australian ISBN retailer and assignment website Bowker</p>
                    <img src={image14} alt="Books on a shelf" />
                    <img src={image14part2} alt="Books on a shelf" />
                    <img src={image14part3} alt="Books on a shelf" />
                    <p>15. <b>Testing</b> your finished digital (eBook) editions on various physical devices such as Kobo, Kindle, iPad, etc. to ensure readability.</p>

                    <p>16. <b>Print and Digital</b> ready books requires creating 1 print interior .pdf file and 1 print cover .pdf file. For eBook, create 1 .epub file for book interior, and 1 .jpg file for eBook cover image.Sample files to upload</p>
                    <img src={image16} alt="Books on a shelf" />
                    <p>17. <b>Handover of illustrations</b>, and metadata. Providing extra content for anniversary or special edition reprints such as storyboards, full editorial reviews (using Kirkus reviews, and through independent reviewers) (Using .pdf, .jpg and .doc file formats.</p>

                    <p>18. <b>Planning release dates</b>, publication date, first sale date is matching on every publishing system (Using Bowker, IngramSpark, local countries cataloguing system)</p>

                    <p>19. <b>Costs</b> Setting up your price margins, file sizes cost margins, metadata on publishing websites. Example: Hardcover print on demand (POD) which means retailer can buy this automatically without consulting you, costs have an initial price to print book e.g. $10, then the illustrator has an recommended commission/discount of 55%. Therefore, for example a $32 book for sale = -55% ($17.60) = $14.40 -$10 to make book = $4.40 - $2 shipping and handling fees = $2.40 profit. Very low, but this is the cost of having your book in physical stores, the prestige and marketing that comes with it. eBooks have a much higher profit margin as it costs almost nothing to sell eBooks depending on royalty.</p>

                    <p>20. <b>Returns</b> (important) of books through IngramSpark incur a loss of profit. If the book costs $15 to make, you lose $15. If you want it returned to you, that will cost an extra $20. It's recommended to destroy books as for reselling you don't know how the returned product has been tampered with, e.g. someone defacing the book.</p>

                    <p>21. <b>File sizes</b> eBook file sizes shouldn't exceed 1GB. However, don't compromise compressing a file if your precious media such as images will lose quality, because technology gets better every day and file size limits become meaningless. Focus on creating the best eBook you can, then decide if it really needs to be compressed. For cover files, IngramSpark has their own file size limits, its best to design the cover in Photoshop/Illustrator and store as .psd file and export to .jpg file format anytime for the specific upload requirement for printing physically or publishing online.</p>

                    <p>22. <b>Uploading your files</b> (1 print cover, 1 print interior, 1 eBook interior, 1 eBook cover) to IngramSpark to deliver to Amazon, Barnes & Nobles etc.) to be distributed worldwide and entering metadata. The final step is to approve and pay for agreement. Once finalised it till take up to 5 days for a response in which it can be approved again. If any mistakes occur you can click on book title and upload only the file that needs to be changed and continue, this will take up to another 5 days to approve. Once approved you will receive an email notification, go to the IngramSpark website then click to approve title. There are 2 options, one checkbox to make available for only you to order yourself called author copies (such as for testing/give always) and the other to enable both author copies and retailers for them to order from IngramSpark anytime they want. Subsequent book editions can be uploaded after the initial version which is logically all linked in the system via the ISBN, so repeat whole process again. IngramSpark website for uploading books for worldwide distribution</p>
                    <img src={image22} alt="Books on a shelf" />
                    <img src={image22part2} alt="Books on a shelf" />
                    <p>23. <b>Author copy ordering</b> can be done from the Orders section of IngramSpark. You will see a screenshot similar to below with options for standard or express shipping as well as order quantity amount, options for PO numbers and email invoices in the next page and more. Depending on shipping option the fastest method usually takes up to 2 weeks. Remember to insert a email address for order processing and shipping updates.. Author copy order screen</p>
                    <img src={image23} alt="Books on a shelf" />
                    <img src={image23part2} alt="Books on a shelf" />
                    <p>24. <b>Publishing / Release date</b> publish date = date book first published. Date of sale is the date book becomes available to purchase. Generally, these are left the same as default. Plan publishing date at least 6 weeks in advance to allow time to edit files and order a test copy (known as author copies).</p>

                    <p>25. <b>Revisions of metadata</b> can be edited anytime before and after. Revision file uploads can take up to 3 weeks of business days (~15days) to process.</p>

                    <p>26. <b>Preorder</b> once metadata is submitted and paid for in IngramSpark, the ebook (but not print) will be available for pre-order and download across all major ebook retailers e.g. Kindle, Kobo, Apple books etc.</p>

                    <p>27. <b>Availability</b> Once both print and eBook are approved, and the published date is passed for GMT-7 Mountain Standard Time (MST). On publishing date/date of first sale, the eBook becomes available immediately worldwide. The print copy becomes available to purchase through retailers such as amazon.com generally 2-3 days after you approve print copy in IngramSpark. It can take up to a further several weeks before your book will be available across many retailers and review websites etc., so be patient. eBook available on Kobo</p>
                    <img src={image27} alt="Books on a shelf" />
                    <p>28. <b>Cataloguing for libraries part 1</b> if legally required or desired you may need to send a print and/or eBook copy to your country’s pre-publication national library or government cataloguing services to ensure logo of catalogue availability can be imprinted in the imprint page if desires. (such as using N.E.D. if in Australia, CIP is in USA, National Library if in New Zealand, British Library for UK, LAC for Canada, etc.)</p>

                    <p>29. <b>Cataloguing for libraries part 2</b> If legally required by your country the first book copies of your new book called legal deposit are to be sent to your countries national library, and state libraries for cataloguing, safekeeping, copyright reasons, etc. (See above links)</p>

                    <p>30. <b>Cheaper printing options</b> exist by using Chinese book printing services. These are usually found on aalibaba.com a wholesale Chinese supplier to customer relationship website.</p>

                    <p>31. <b>Author biography page</b> can be setup for Amazon for free using Amazon Author Central. This allows you to customise the viewing experience of your books on Amazon and allows free marketing of related products. After some time period e.g. 2 weeks, your book may be available in Goodreads you can sign up and take ownership of your books as the author and customise your page. It's recommended to also create another author biography website by purchasing a domain name and setting up a website such as through online services Shopify or Squarespace (paid), Wix or Wordpress (free) that you can use as a website for all your created works/books and again to promote more customer engagement and positivity.Amazon Author Central website      Amazon Author page       Google Author knowledge panel</p>
                    <img src={image31} alt="Books on a shelf" />
                    <img src={image31part2} alt="Books on a shelf" />
                    <img src={image31part3} alt="Books on a shelf" />
                    <p>32. <b>Reviews</b> books are best marketed through reviews. Having positive reviews across many popular book reviewing websites is the best way to get picked up for book signings, deals, etc. focus on book giveaways, having book clubs, reviewers, public receive free copies and giving them a link to leave positive reviews.</p>

                    <p>33. <b>Marketing</b> can be done by signing up to as many books related social media websites and creating posts. Engagement is the biggest metric to aim for to attract readers. Visit or contact brick and mortar stores and asks if you can sell your books, try to get book signings arranged at physical locations and conventions, get your name out there as much as possible. Buy a Lifesize cut-out of yourself or book and a foldable table and find somewhere public, set up a small stand and engage with the public, anything is better than nothing.</p>

                    <p>34. <b>New book editions</b> There are 3 types of changes to a book. Reprints are for books that have had small mistakes, spelling errors, minor factual changes, references corrected etc., that don't require a new book edition. You can choose to add the words "reprint" in the imprint page next to the books edition, however it's not industry expected or necessary. Revised editions are for changes to update your book with the latest facts such as figures, studies, findings etc., to bring your book up to compliance and for promoting with reviews, forwards, advertising book range, new covers etc. Revised books can be reprinted with the words "revision" or "revised edition" added to the imprint page which is industry expected but not necessary. Revised editions don't require a new ISBN. Lastly a new book edition is reserved for any large changes such as new title/subtitle, large changes to body (main part) of book such as new chapters, and different versions of the book such as hardback, paperback, etc.. these require a new ISBN, and can potentially require new catalogue legal deposits sent out to national libraries and government boards for legal reasons. Either way any changes to book .pdf or .epub can be reuploaded into IngramSpark for the whole approval process again. When in doubt confirm with an editor.</p>

                    <p>35. <b>Patience, Failure, and trying again</b> Sometimes a book you've created isn't the best or sells well while it stagnates write another book. Use your experience to surpass yourself. You are a media manager, content creator, author and entrepreneur you have done what others only dream of. Be proud of yourself.</p>

                    <br />
                </div>
                <div className="column3"></div>
            </div>
        </div>
    );
};

export default WritePublishBook;

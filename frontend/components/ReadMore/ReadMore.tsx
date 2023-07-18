import React, { useState } from "react";
import styles from "./ReadMore.module.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ReadMore = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box className={styles.readMoreBox}>
      <Accordion
        expanded={expanded}
        onChange={() => {
          setExpanded(!expanded);
        }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          style={
            expanded
              ? { backgroundColor: "#444242", color: "white" }
              : { backgroundColor: "#f2f2f2" }
          }
          className={styles.headingContentReadMore}
        >
          <Typography className={styles.readMoreText}>
            READ MORE ABOUT SUGAR COSMETICS{" "}
            <ChevronRightIcon fontSize="large" className={styles.angleIcon} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={styles.contentBox}>
            <p className={styles.head}>
              Enhance your beauty looks with SUGAR COSMETICS
            </p>
            <br />
            <p>
              Your search for a makeup and beauty range that’s cruelty-free,
              high on style, and even higher on performance ends here at SUGAR
              Cosmetics! SUGAR makeup stands for striking formulas that
              perfectly suit every Indian skin tone, extremely rich colour
              payoff, along with a unique and incredible range of products that
              stand the test of time. This hugely popular range of premium
              colour cosmetics and beauty products are crafted in
              state-of-the-art facilities across Germany, Italy, India, USA, and
              Korea. The clutter-breaking 450+ makeup products are skillfully
              wrapped in a signature low-poly mosaic designed packaging that is
              bursting with colour and is sure to complement the sweet and sassy
              side of you.
            </p>
            <br />
            <p>
              The chart-topping makeup & beauty range is spread across
              categories like Lip makeup, Eye makeup, Face makeup, Nail paints
              and Skin care. The best-selling beauty products in India extend
              from the long lasting lipsticks to creamy lip crayons, lip primers
              to eyebrow definers, foundation stick with an inbuilt brush to
              cushion BB compacts, setting mist to makeup cleansing water. SUGAR
              has pioneered the trend shift towards “mattes'' with its
              cult-favourite range of Matte Liquid Lipsticks and equally popular
              Matte Eyeliners. Some of the recent innovations like the
              ultra-luxe range of lipsticks called Mettle, Jelly Highlighters, a
              range of face makeup including colour correctors, highlighters,
              bronzers and blushes in a stick format, have created waves in the
              makeup market. Say hello to SUGAR’s newest skincare category with
              our range of Sheet Masks, Clay Masks, Eye Creams and a
              ground-breaking hyaluronic acid and Vitamin C skincare range and
              so much more.
            </p>
            <br />
            <p>
              So get ready to dive into the world of SUGAR Cosmetics and rule
              the world, one look at a time!
            </p>
            <br />
            <p className={styles.head}>
              Look your glamorous best with Exclusive SUGAR Makeup Collection!
            </p>
            <br />
            <p>
              Whether you are a makeup connoisseur or a budding enthusiast, it
              is easy to be overwhelmed in the sea of beauty products in India.
              But with SUGAR Cosmetics, you can put your search for the perfect
              makeup collection to rest. Since its inception, SUGAR has been
              working with an aim to create a high-quality yet affordable range
              of products to complement the iconic Indian beauty. Not only that,
              you can shop for all these cosmetics online without going through
              a tiring process of finding a cosmetic store that will cater to
              your needs.
            </p>
            <br />
            <p>
              Makeup is not just a necessity; it’s a statement that says we are
              beautiful, but a dash of lipstick every once in a while makes us
              feel sexy. SUGAR Cosmetics truly keeps up to our promise to have
              your back to make heads turn wherever you go. Make sure you own a
              beauty kit with products that are exclusively created and
              recommended for you by beauty experts, but most of all – own a
              makeup that makes you feel confident in your own skin. Your
              selection of cosmetics to build your makeup stash, is sure to
              provide you with an ensemble that is on-trend and a reflection of
              you and your style. This makeup collection is everything you need
              to look stunning while you’re on the go; and you might just fall
              in love with yourself all over again.
            </p>
            <br />
            <p className={styles.head}>
              How to Choose the Right Makeup & Cosmetics?
            </p>
            <br />
            <p>
              While we guide you through the best picks to make your makeup kit
              of this stellar range, here are a few things to keep in mind while
              choosing the right products for you. Number one, understand your
              skin texture, skin tone, and skin undertone. For texture – If you
              have dry skin, opt for crème based, hydrating products like liquid
              foundations, cushion compacts that are infused with moisturizing
              ingredients like aloe vera, glycerin and if you have oily skin,
              pick non-greasy, powder-based makeup that has oil-absorbing
              ingredients like kaolin clay. SUGAR Cosmetics stands strong to the
              promise of inclusivity in our makeup range and provides a plethora
              of shades that suit all skin tones and undertones. While you are
              spoiled for choice when shopping online at SUGAR Cosmetics with
              makeup products that are trending, and hues that are raging the
              makeup charts, never forget to own your style and be
              unapologetically yourself!
            </p>
            <br />
            <p className={styles.head}>
              SUGAR’s Lipstick Range: Let your lips steal the show!
            </p>
            <br />
            <p>
              A lipstick is the sassiest makeup product a girl can own. With
              SUGAR lipsticks, now you can flaunt your pout and grab eyeballs
              wherever you go. Our lipsticks are rich pigmented and loaded with
              natural ingredients to ensure your lips are healthy and happy,
              always. You can now select from various lip makeup products like
              lip crayons, lacquers, lip gloss and lip liners in matte, creamy
              matte and glossy finish. With matte lip colours being all the
              rage, you can shop our delectable range of Matte as Hell crayon
              lipstick mini set where you can select any 3 lip colours of your
              choice. In case you are looking for a smudge proof lipstick, our
              Smudge Me Not liquid lipstick is sure to become your lip’s best
              friend. Just a single coat and you are done for the day and night
              too. This kiss-proof range ensures your lips remain gorgeously
              tainted while you eat, drink and kiss your heart out! Available in
              52 shades, this lip line is a riot of colours and choosing one
              might be tough. With an endless range of lipstick shades and
              textures to choose from, you are sure to find your perfect SUGAR
              lipstick for every mood and occasion.
            </p>
            <br />
            <p>
              To get a smooth application for your lipstick and make it last
              longer, begin with a lip primer like the SUGAR Seal The Show Lip
              Primer. Start with defining your pout with the SUGAR Lipping On
              The Edge Lip Liner that gives you fuller, matte looking lips.
              There is an abundance of choice for the type of lipstick, the
              texture and finish that you could choose froin. Opt for a Liquid
              Lipstick with a super matte finish and long-lasting power like the
              SUGAR Smudge Me Not Liquid Lipstick, or an easy-to-use crayon
              lipstick like the SUGAR Matte As Hell Crayon Lipstick with a
              comfort matte finish that skips the need of a lip liner. You will
              be showered with choices from a classic bullet lipstick like the
              SUGAR Nothing Else Matter Longwear Lipstick, to twist up
              oval-shaped slim bullet lipstick like the SUGAR Matte Attack
              Transferproof Lipstick ensuring precise and proper application and
              coverage. You can choose from a super matte texture to a velvety
              matte feel, and crème, metallic or gloss finish lipsticks from
              SUGAR’S incredible lip makeup collection. Try the new Wonder Woman
              Lipsticks that are 100% vegan, and your lipstick shades collection
              will be incomplete without a classy red and a perfect nude that
              appropriately complements your skin colour. Other must-have
              lipstick colours are a popping pink and purple for parties, a soft
              mauve and pink or earthy browns for an office look or day dates,
              and some glossy lipstick shades and metallic lipstick colours for
              the day you want to glam it up. As a beginner, we would recommend
              your go-to lipstick should definitely be a subtle shade (soft pink
              or nude brown lipstick colour).
            </p>
            <br />
            <p className={styles.head}>
              SUGAR Eye Makeup range: Check out an exciting collection of
              kajals, eyeliners & mascaras!
            </p>
            <br />
            <p>
              With SUGAR’s eye makeup range, you can now play with dramatic
              eyeliners, deeply tainted Kajals, vibrant eye shadows and much
              more. If you are looking for a Kajal that actually delivers what
              it says, our Kohl Of Honour Intense Kajal-01 Blackout black is for
              you. This extreme-wear, waterproof kajal is smudge free, transfer
              resistant and stays on for 12 hours straight. Eye makeup is
              incomplete without an eye liner and the Wingman Waterproof
              Microliner-01 I’ll be black is a dream come true eyeliner with
              matte finish. It is smudge proof, deeply pigmented and promises a
              stay of up to 12 hours. Next try our Blend the Rules Eyeshadow
              Palette, an iconic trio of warm neutrals to create smokey, mauve
              and nude effects on your eyes. Finish your eye makeup with Lash
              Mob Limitless Mascara-01 Black with a Bang. The creamy mascara
              separates, defines and combs through your lashes giving you that
              defined long lash look.
            </p>
            <br />
            <p className={styles.head}>
              SUGAR Face Makeup range: One-stop cosmetics shop for a flawless
              complexion
            </p>
            <br />
            <p>
              Now, looking like a million bucks is easy with SUGAR’s versatile
              face makeup range. All you need is long-wear foundations, setting
              powders and professional makeup brushes and some makeup skills to
              transform you into a glitzy goddess. Great makeup requires a
              flawless base and our Ace of Face Foundation Stick stands the test
              of time. Quite literally! This creamy, rich foundation feels like
              a second skin and offers 22 different shades for light, medium and
              dark complexion to match your skin tone. You can shop for these
              beauty products online and much more like the contour De Force
              Mini Blush, Dream Cover SPF15 Mattifying Compact and Bling Leader
              Illuminating Moisturiser from our website.
            </p>
            <br />
            <p className={styles.head}>
              Step-by-Step Guide to Ace your Makeup Routine
            </p>
            <br />
            <p>
              Prepare yourself to play with makeup and find the look that shouts
              ‘YOU!’ Take a read through a quick guide to the types of makeup
              products that you can opt for while shopping online at SUGAR.
            </p>
            <br />
            <ul>
              <li>
                <span className={styles.head}> Prep:</span> To begin with,
                always start putting your makeup on a fresh and clean canvas.
                This means that you should always wash your face and clear out
                any residue with a good cleansing water or lotion to start right
                like the SUGAR Swipe Right Cleansing Water. For a true
                glow-from-within look, make sure you follow this up with a sheet
                mask that helps your skin feel supple and smooth. Once the face
                is set, choose from SUGAR’s collection of face primers, which
                will help keep your makeup in place for a long period of time. A
                little goes a long way with a pea-sized amount of primer that
                acts as a skin-perfector, creating the definition of a flawless
                base whilst blurring out wrinkles and fine lines. According to
                your skin time, you can choose a mattifying face primer or a
                hydrating face primer.
              </li>
              <li>
                <span className={styles.head}>Build your makeup routine:</span>{" "}
                Start your face makeup by covering any imperfections, blemishes
                or skin discolourations by using the SUGAR Magic Wand Waterproof
                Concealer and the SUGAR Face FWD {">>"} Colour Corrector sticks.
                Use the two makeup products to cover your under eye dark
                circles, hyperpigmentation, blemishes, redness, scars and spots.
                Dot in the product on your face gently and blend in using a
                light hand. After creating a flawless base, apply your
                foundation in the shade that’s closest to your skin tone. The
                best foundation type you could opt for is the foundation cream
                that comes in a stick format with an attached blending brush at
                the other end, making it handy and easy to use like the SUGAR
                Ace Of Face Foundation Stick. After creating your
                picture-perfect canvas, finish your base by dabbing some compact
                or loose powder to set it. For those days when you want to go
                light on your face makeup, simply use a concealer, followed with
                a BB cream like the SUGAR Goddess Of Flawless SPF30+ BB Cream or
                SUGARPower Clay SPF20 BB Cushion that suits your skin tone and
                set it in with the SUGAR Dream Cover SPF15 Mattifying Compact.
              </li>
              <li>
                <span className={styles.head}>
                  Contour and define your features:
                </span>{" "}
                It’s now time to contour your face, get that perfect chiseled
                look. Create a defined jawline, highlight your best features and
                give yourself those flushed cheeks. Use the SUGAR Contour De
                Force Mini Bronzer or the SUGAR Face FWD {">>"} Contour Stick
                under your cheekbones to sculpt and define. Apply small amounts
                of your bronzer along the hollow till your hairline and on the
                sides of your nose to achieve a defined look. You can also apply
                it under your jawline for a completely sculpted look. For a
                brilliant flush of colour use a blush brush and apply the SUGAR
                Contour De Force Mini Blush to the apples of the cheek. Amp up
                the shine and glow on your skin by applying the SUGAR Contour De
                Force Mini Highlighter. Apply your highlighter anywhere you want
                an intense glow, like the top of your cheekbones, over or under
                browbones, down the bridge of the nose, on the cupid's bow of
                your lips and even the inner corner of the eyes.
              </li>
              <li>
                <span className={styles.head}>
                  Flaunt beautiful eye makeup:
                </span>{" "}
                Now let’s talk about creating an impeccable ‘eye candy’! Start
                your eye makeup by defining your eyebrow. Use the SUGAR Arch
                Arrival Brow Definer in the right shade that matches the shade
                of your eyebrow hair. Define and fill in your eyebrows in short
                strokes, and then comb them out with the attached brush to
                achieve naturally groomed or strikingly bold eyebrows. Next, win
                over your eye game by choosing a richly pigmented and blendable
                eyeshadow palette that comes with a mirror and dual-ended
                applicator. Your eye shadow kit should include matte eyeshadow
                shades in nudes and deeper hues, metallic and foil powders. You
                can choose any of your fave from the SUGAR Blend The Rules
                Eyeshadow Palette or the new Wonder Woman eyeshadow palettes
                that has a mix of matte, shimmer and high-shine foil finish
                eyeshadow shades and bronzer, blush to add definition.{" "}
              </li>
              <li>
                <span className={styles.head}>Pretty up your nails:</span> Your
                makeup kit is never complete without a range of nail polish
                colours. Let your fingers do the talking with SUGAR’s nail
                polish range called Tip Tac Toe Nail Lacquers that are sure to
                keep your tips on-point! Choose your favourite nail paint
                colours from a wide range of glossy, matte or shimmer nail
                lacquers. The chip-free, streak-free formulation, quick dry
                formula and specially crafted ergonomic applicator checks on all
                your nail paint woes. Get experimental and creative with nail
                polish trends and nail art fads by choosing the best fits for
                you from our wide range of nail paintcolours.
              </li>
            </ul>
            <br />
            <p>
              Buy the best of SUGAR Beauty Kits & Makeup Value sets that are
              perfect to indulge!
            </p>
            <br />
            <p>
              Worried about what to pack for your next summer vacay trip or
              looking for all-in-one makeup sets to glam for a wedding? Choose
              from an assemblage of gorgeous beauty kits and makeup combos like
              the Liquid Lipstick + Kohl Value set and Eyeliner + Kajal Value
              set or from super saver combo packs like the Lip Crayon value set
              and Prepped Up Combo face mask sheets. Indulge in glowing skin
              beauty set or beginner-friendly makeup kit that includes
              everything for you to look fabulous. Pick our exclusive launch
              Pride Edition mini lipstick sets in rainbow-themed packaging are
              all-out bold, loud and bright in every way.
            </p>
            <br />
            <p>
              SUGAR’s new skincare range: Products that add glow and keep your
              skin healthy!
            </p>
            <br />
            <p>
              Makeup looks great when complemented with smooth skin and a
              natural glow. SUGAR Cosmetics brings for you an exclusive 100%
              vegetarian and cruelty-free skin care range that will pamper and
              nourish your skin from within. Grab your SUGAR products from your
              nearest cosmetic store or order them online in India. From
              refreshing face masks, illuminating moisturizers, face setting
              mists and makeup remover, we have it all covered for you. Packed
              with the goodness of vitamin C, our Citrus Got Real range will
              cover all your skin concerns like blemishes, dryness and dullness
              to give you skin that is hydrated, glowing and healthy. For dull,
              dehydrated and dry skin opt for unique Hyaluronic acid-based
              skincare packed with great skin loving ingredients. The SUGAR
              Aquaholic skincare range works magic and provides instant
              hydration to your skin while relaxing your skin. For those TLC
              sessions during the weekends, you can choose from a wide range of
              SUGAR face masks that will rejuvenate your skin.
            </p>
            <br />
            <p>
              Some skin TLC: Removing your makeup, and continuing with a
              cleansing, toning and moisturizing routine is mandatory before you
              retire for the day. This keeps your skin healthy and prevents
              premature ageing of skin. Use gentle makeup cleansing water to
              wipe out your waterproof makeup, and then follow the Korean beauty
              care routine of double cleansing. This means you use an oil-based
              cleanser to wash your face and clear out any makeup residue, dirt
              and grime and follow with a gentle water-based face wash after
              that. Proceed with a toner or facial essence to refine pores and
              balance skin pH, use a pore cleansing mask and then a rejuvenating
              Korean sheet mask. Post that you can hydrate your skin using an
              overnight sleeping face mask. Your perfect picks for a quick
              skincare routine would be SUGAR Swipe Right Cleansing Water,
              following with the SUGAR Power Clay 3-min Pore Cleansing Mask or
              Power Clay Peel Off Mask. You can also use your favourite from
              SUGAR’s wide range of Sheet Masks. Then end this routine with the
              SUGAR Aquaholic Overnight Water Mask. This routine helps to avoid
              clogging of pores and ensures healthy, supple and fresh-looking
              skin.
            </p>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ReadMore;

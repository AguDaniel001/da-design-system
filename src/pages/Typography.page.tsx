import DaTypography from "../components/ui/typography/DaTypography";

export default function TypographyPage() {
  return (
    <div className="w-full bg-background smooth-transition min-h-screen">
      <section className="p-5 pt-30 w-full flex flex-col items-center gap-10">
        <div className="w-full max-w-4xl">
          <div className="mb-10 mt-10 flex flex-col  gap-4">
            <DaTypography variant="displayMd" align="left">
              Typography
            </DaTypography>
          </div>

          {/* Display Section */}
          <div className="mb-16">
            <DaTypography variant="titleLg"className="mb-8 border-b pb-2 border-primary/10">
              Display
            </DaTypography>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">displayLg</DaTypography>
                <DaTypography variant="displayLg">The quick brown fox</DaTypography>
              </div>
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">displayMd</DaTypography>
                <DaTypography variant="displayMd">The quick brown fox</DaTypography>
              </div>
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">displaySm</DaTypography>
                <DaTypography variant="displaySm">The quick brown fox</DaTypography>
              </div>
            </div>
          </div>

          {/* Headline Section */}
          <div className="mb-16">
            <DaTypography variant="titleLg" className="mb-8 border-b pb-2 border-primary/10">
              Headline
            </DaTypography>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">headlineLg</DaTypography>
                <DaTypography variant="headlineLg">The quick brown fox jumps over the lazy dog</DaTypography>
              </div>
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">headlineMd</DaTypography>
                <DaTypography variant="headlineMd">The quick brown fox jumps over the lazy dog</DaTypography>
              </div>
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">headlineSm</DaTypography>
                <DaTypography variant="headlineSm">The quick brown fox jumps over the lazy dog</DaTypography>
              </div>
            </div>
          </div>

          {/* Title Section */}
          <div className="mb-16">
            <DaTypography variant="titleLg"  className="mb-8 border-b pb-2 border-primary/10">
              Title
            </DaTypography>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">titleLg</DaTypography>
                <DaTypography variant="titleLg">The quick brown fox jumps over the lazy dog</DaTypography>
              </div>
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">titleMd</DaTypography>
                <DaTypography variant="titleMd">The quick brown fox jumps over the lazy dog</DaTypography>
              </div>
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">titleSm</DaTypography>
                <DaTypography variant="titleSm">The quick brown fox jumps over the lazy dog</DaTypography>
              </div>
            </div>
          </div>

          {/* Body Section */}
          <div className="mb-16">
            <DaTypography variant="titleLg"  className="mb-8 border-b pb-2 border-primary/10">
              Body
            </DaTypography>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">bodyLg</DaTypography>
                <DaTypography variant="bodyLg">
                  The quick brown fox jumps over the lazy dog. This is a longer paragraph to demonstrate the line height and readability of the body text variants in the design system. It should feel balanced and easy to read even in multiple lines.
                </DaTypography>
              </div>
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">bodyMd</DaTypography>
                <DaTypography variant="bodyMd">
                  The quick brown fox jumps over the lazy dog. This is a longer paragraph to demonstrate the line height and readability of the body text variants in the design system. It should feel balanced and easy to read even in multiple lines.
                </DaTypography>
              </div>
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">bodySm</DaTypography>
                <DaTypography variant="bodySm">
                  The quick brown fox jumps over the lazy dog. This is a longer paragraph to demonstrate the line height and readability of the body text variants in the design system. It should feel balanced and easy to read even in multiple lines.
                </DaTypography>
              </div>
            </div>
          </div>

          {/* Label Section */}
          <div className="mb-16">
            <DaTypography variant="titleLg"  className="mb-8 border-b pb-2 border-primary/10">
              Label
            </DaTypography>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">labelLg</DaTypography>
                <DaTypography variant="labelLg">The quick brown fox</DaTypography>
              </div>
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">labelMd</DaTypography>
                <DaTypography variant="labelMd">The quick brown fox</DaTypography>
              </div>
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">labelSm</DaTypography>
                <DaTypography variant="labelSm">The quick brown fox</DaTypography>
              </div>
            </div>
          </div>

          {/* Others Section */}
          <div className="mb-16">
            <DaTypography variant="titleLg"  className="mb-8 border-b pb-2 border-primary/10">
              Others
            </DaTypography>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">captionMd</DaTypography>
                <DaTypography variant="captionMd">The quick brown fox jumps over the lazy dog</DaTypography>
              </div>
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">captionSm</DaTypography>
                <DaTypography variant="captionSm">The quick brown fox jumps over the lazy dog</DaTypography>
              </div>
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">caption</DaTypography>
                <DaTypography variant="caption">The quick brown fox jumps over the lazy dog</DaTypography>
              </div>
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">overlineSm</DaTypography>
                <DaTypography variant="overlineSm" className="uppercase tracking-widest">Overline Text</DaTypography>
              </div>
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">overline</DaTypography>
                <DaTypography variant="overline" className="uppercase tracking-widest">Overline Text</DaTypography>
              </div>
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">inline</DaTypography>
                <DaTypography tag="span" variant="bodyMd">
                  This is a <DaTypography variant="inline">colored inline</DaTypography> text element.
                </DaTypography>
              </div>
              <div className="flex flex-col gap-2">
                <DaTypography variant="captionSm" color="tertiary" className="uppercase tracking-wider">inlineAccent</DaTypography>
                <DaTypography tag="span" variant="bodyMd">
                  This is an <DaTypography variant="inlineAccent">accent inline</DaTypography> text element.
                </DaTypography>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

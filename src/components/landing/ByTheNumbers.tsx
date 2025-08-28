export default function ByTheNumbers() {
  const stats = [
    { value: '100M+', label: 'Premium Assets' },
    { value: '1TB', label: 'Cloud Storage' },
    { value: 'P99', label: 'One-Time Fee' },
    { value: '∞', label: 'Lifetime Access' },
  ];

  return (
    <section id="numbers" className="py-20 md:py-32">
      <div className="container">
        <div className="bg-card/60 dark:bg-card/40 backdrop-blur-lg rounded-xl border border-border/50 shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="font-headline text-5xl md:text-7xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm md:text-lg text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

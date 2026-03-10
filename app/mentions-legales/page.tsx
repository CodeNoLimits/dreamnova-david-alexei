import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mentions Légales — Dream Nova Consult',
  description: 'Mentions légales de Dream Nova Consult, agence IA basée à Jérusalem.',
}

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition mb-8">
          <ArrowLeft size={16} />
          Retour à l&apos;accueil
        </Link>

        <h1 className="font-serif text-3xl sm:text-4xl mb-8">Mentions Légales</h1>

        <div className="space-y-8 text-[var(--color-text-secondary)] leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">1. Éditeur du site</h2>
            <p>
              <strong>Dream Nova Consult</strong><br />
              Activité de conseil en intelligence artificielle et développement web<br />
              Siège : Jérusalem, Israël<br />
              Email : dreamnovaultimate@gmail.com<br />
              Directeur de la publication : David Dream Nova, CEO & Fondateur
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">2. Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-gold)] hover:underline">vercel.com</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, logiciels) est la propriété exclusive de Dream Nova Consult ou de ses partenaires. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans autorisation écrite préalable.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">4. Données personnelles</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi israélienne sur la protection de la vie privée, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à : dreamnovaultimate@gmail.com
            </p>
            <p className="mt-2">
              Pour plus d&apos;informations, consultez notre <Link href="/confidentialite" className="text-[var(--color-gold)] hover:underline">politique de confidentialité</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">5. Limitation de responsabilité</h2>
            <p>
              Dream Nova Consult s&apos;efforce de fournir des informations aussi précises que possible. Toutefois, l&apos;entreprise ne pourra être tenue responsable des omissions, inexactitudes ou carences dans la mise à jour de ces informations.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">6. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit israélien. En cas de litige, les tribunaux de Jérusalem seront seuls compétents.
            </p>
          </section>
        </div>

        <p className="text-xs text-[var(--color-text-muted)] mt-12">
          Dernière mise à jour : Février 2026
        </p>
      </div>
    </div>
  )
}

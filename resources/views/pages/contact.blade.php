@extends('layouts.app')

@section('title', 'Contact Us | DevTools Hub')
@section('meta_description', 'Get in touch with DevTools Hub. Send feedback, report a tool bug, or suggest a new tool feature.')

@section('content')
<div style="background: #FFFFFF; border-bottom: 1px solid var(--border-color); padding: 40px 0;">
  <div class="container container-narrow">
    <h1 style="font-size: 2.2rem; margin-bottom: 12px;">Contact & Feedback</h1>
    <p style="color: var(--text-muted); font-size: 1.05rem;">
      Have feedback or feature requests? Send us a message or call directly below.
    </p>
  </div>
</div>

<div class="container container-narrow" style="padding-top: 40px;">
  <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 24px; margin-bottom: 32px;" class="two-col-grid">
    <div style="background: #FFFFFF; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
      <h3 style="margin-bottom: 16px;">Direct Contact</h3>
      <p style="font-weight: 700; font-size: 1.1rem; color: var(--dark-navy); margin-bottom: 6px;">Sushil K. Kawde</p>
      <!-- <p style="color: var(--primary); font-weight: 700; font-size: 1rem; margin-bottom: 8px;">
        &#128222; <a href="tel:+919975829531" style="color: var(--primary);">+91 9975829531</a>
      </p> -->
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 8px;">
        ?? <a href="mailto:kawdes694@gmail.com" style="color: var(--primary);">kawdes694@gmail.com</a>
      </p>
      <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 12px;">
        ?? Chhatrapati Sambhajinagar
      </p>
      <p style="font-size: 0.85rem; color: var(--text-muted);">
        GitHub: <a href="https://github.com/Sushil-kawde99/devtools-hub" target="_blank" rel="noopener noreferrer" style="color: var(--primary); font-weight: 600;">@Sushil-kawde99</a>
      </p>
    </div>

    <div style="background: #FFFFFF; padding: 32px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
      <div id="contactSuccessAlert" class="alert alert-success" style="display: none; padding: 24px; text-align: center; flex-direction: column;">
        <div style="font-size: 2rem; margin-bottom: 8px;">??</div>
        <h3>Thank you for your message!</h3>
        <p>We appreciate your feedback and will review your submission.</p>
      </div>

      <form id="contactForm">
        <div class="form-group">
          <label class="form-label">Your Name</label>
          <input 
            type="text" 
            id="contactName"
            className="code-textarea"
            style="min-height: 48px; height: 48px; width: 100%; border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0 16px;"
            placeholder="John Doe"
            required
          />
        </div>

        <div class="form-group">
          <label class="form-label">Email Address</label>
          <input 
            type="email" 
            id="contactEmail"
            className="code-textarea"
            style="min-height: 48px; height: 48px; width: 100%; border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0 16px;"
            placeholder="name@example.com"
            required
          />
        </div>

        <div class="form-group">
          <label class="form-label">Message / Tool Request</label>
          <textarea 
            id="contactMessage"
            class="code-textarea"
            rows="5"
            placeholder="Describe your suggestion or tool issue..."
            required
          ></textarea>
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%;">
          ?? Send Message
        </button>
      </form>
    </div>
  </div>
</div>
@endsection

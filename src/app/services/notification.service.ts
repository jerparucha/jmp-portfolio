import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private webhookUrl = environment.discordWebhookUrl;

  notify(event: 'resume_viewed' | 'resume_downloaded') {
    if (!this.webhookUrl || this.webhookUrl === 'DISCORD_WEBHOOK_PLACEHOLDER') return;

    const labels: Record<string, string> = {
      resume_viewed: '👁️ Someone viewed your resume',
      resume_downloaded: '📄 Someone downloaded your resume',
    };

    fetch(this.webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [{
          title: labels[event],
          color: 5793266,
          timestamp: new Date().toISOString(),
        }],
      }),
    }).catch(() => {});
  }
}
